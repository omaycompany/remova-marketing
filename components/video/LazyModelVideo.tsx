"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ModelVideo } from "@/content/model-videos";

interface Props {
    video: ModelVideo;
}

export default function LazyModelVideo({ video }: Props) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

    useEffect(() => {
        if (shouldLoadVideo) return;
        const element = wrapperRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadVideo(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "600px 0px", threshold: 0.01 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [shouldLoadVideo]);

    useEffect(() => {
        if (!shouldLoadVideo) return;
        videoRef.current?.play().catch(() => {
            // Browsers can block programmatic playback; controls remain available.
        });
    }, [shouldLoadVideo]);

    return (
        <div ref={wrapperRef} className="relative aspect-video w-full bg-slate-100 dark:bg-black">
            {shouldLoadVideo ? (
                <video
                    ref={videoRef}
                    className="block h-full w-full"
                    controls
                    playsInline
                    preload="none"
                    poster={video.thumbnailUrl}
                    aria-label={video.title}
                >
                    <source src={video.contentUrl} type="video/mp4" />
                    <track src={video.captionsUrl} kind="captions" srcLang="en" label="English" default />
                </video>
            ) : (
                <button
                    type="button"
                    className="group relative block h-full w-full overflow-hidden text-left"
                    onClick={() => setShouldLoadVideo(true)}
                    aria-label={`Play ${video.title}`}
                >
                    <img
                        src={video.thumbnailUrl}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <span className="absolute inset-0 bg-slate-950/20 transition-colors group-hover:bg-slate-950/30" />
                    <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-slate-950 shadow-2xl transition-transform group-hover:scale-105">
                        <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
                    </span>
                </button>
            )}
        </div>
    );
}
