"use client";

import type { ModelVideo } from "@/content/model-videos";

interface Props {
    video: ModelVideo;
}

export default function LazyModelVideo({ video }: Props) {
    return (
        <div className="relative aspect-video w-full bg-slate-100 dark:bg-black">
            <video
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
        </div>
    );
}
