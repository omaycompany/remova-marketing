"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function LazyFeatureHeroVideo() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

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
            { rootMargin: "500px 0px", threshold: 0.01 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [shouldLoadVideo]);

    useEffect(() => {
        if (!shouldLoadVideo) return;
        videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {
            setIsPlaying(false);
        });
    }, [shouldLoadVideo]);

    return (
        <div
            id="features-video"
            ref={wrapperRef}
            className="relative mt-14 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-950/10 dark:border-white/10 dark:bg-black dark:shadow-black/40"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="aspect-video w-full">
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/videos/features-page-hero-poster.png"
                    aria-label="Remova native chat workflow showing governed AI workspaces, policy checks, analytics, model routing, and zero data retention"
                >
                    <source src="/videos/features-page-hero.mp4" type="video/mp4" />
                </video>
            </div>
            {!isPlaying ? (
                <button
                    type="button"
                    onClick={() => {
                        setShouldLoadVideo(true);
                        videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
                    }}
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/10 text-slate-950"
                    aria-label="Play Remova features video"
                >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/95 shadow-2xl">
                        <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
                    </span>
                </button>
            ) : null}
        </div>
    );
}
