"use client";

import { useEffect } from "react";

const FULLSCREEN_CLASS = "demo-fullscreen";

export default function DemoFullscreenMode() {
    useEffect(() => {
        document.documentElement.classList.add(FULLSCREEN_CLASS);
        document.body.classList.add(FULLSCREEN_CLASS);

        return () => {
            document.documentElement.classList.remove(FULLSCREEN_CLASS);
            document.body.classList.remove(FULLSCREEN_CLASS);
        };
    }, []);

    return null;
}
