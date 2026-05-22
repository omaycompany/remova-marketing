"use client";

import { AnchorHTMLAttributes, useEffect, useState } from "react";

const recipientPartsByMailbox = {
    contact: ["contact", "remova", "org"],
    legal: ["legal", "remova", "org"],
    privacy: ["privacy", "remova", "org"],
    sales: ["sales", "remova", "org"],
    security: ["security", "remova", "org"],
    support: ["support", "remova", "org"],
} as const;

type SafeEmailLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    mailbox?: keyof typeof recipientPartsByMailbox;
    subject?: string;
    body?: string;
};

function buildMailto(mailbox: keyof typeof recipientPartsByMailbox, subject?: string, body?: string) {
    const recipientParts = recipientPartsByMailbox[mailbox];
    const recipient = `${recipientParts[0]}@${recipientParts[1]}.${recipientParts[2]}`;
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    const query = params.toString();
    return `mailto:${recipient}${query ? `?${query}` : ""}`;
}

export default function SafeEmailLink({ mailbox = "contact", subject, body, children, ...props }: SafeEmailLinkProps) {
    const [href, setHref] = useState(() => buildMailto(mailbox, subject, body));

    useEffect(() => {
        setHref(buildMailto(mailbox, subject, body));
    }, [body, mailbox, subject]);

    return (
        <a {...props} href={href}>
            {children}
        </a>
    );
}
