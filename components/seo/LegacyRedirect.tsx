"use client";

interface LegacyRedirectProps {
    to: string;
}

import { useEffect } from "react";

export default function LegacyRedirect({ to }: LegacyRedirectProps) {
    useEffect(() => {
        window.location.replace(to);
    }, [to]);

    return null;
}
