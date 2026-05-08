"use client";

import { AnchorHTMLAttributes, useEffect, useState } from "react";

type SafeEmailLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    subject?: string;
    body?: string;
};

const recipientParts = ["notifications", "remova", "org"] as const;

function buildMailto(subject?: string, body?: string) {
    const recipient = `${recipientParts[0]}@${recipientParts[1]}.${recipientParts[2]}`;
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const query = params.toString();
    return `mailto:${recipient}${query ? `?${query}` : ""}`;
}

export default function SafeEmailLink({ subject, body, children, ...props }: SafeEmailLinkProps) {
    const [href, setHref] = useState("#");

    useEffect(() => {
        setHref(buildMailto(subject, body));
    }, [body, subject]);

    return (
        <a {...props} href={href}>
            {children}
        </a>
    );
}
