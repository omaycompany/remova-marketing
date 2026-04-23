import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const leadMagnetLabels: Record<string, string> = {
    "readiness-check": "AI Readiness Check",
    "use-case-selector": "Safe AI Use Case Selector",
    "policy-generator": "AI Policy Generator",
    "employee-safety-checklist": "Employee AI Safety Checklist",
    "adoption-plan": "AI Adoption Plan",
    "risk-test": "AI Risk Test",
};

type SubscribeBody = {
    email?: unknown;
    magnet?: unknown;
};

function normalizeEmail(value: string) {
    return value.trim().toLowerCase();
}

function isAlreadySubscribedStatus(status: number) {
    return status === 409 || status === 422;
}

function getMessageFromResponseBody(body: unknown): string | null {
    if (!body || typeof body !== "object") return null;

    const errorMaybe = (body as { error?: unknown }).error;
    if (typeof errorMaybe === "string" && errorMaybe.trim()) return errorMaybe;

    if (errorMaybe && typeof errorMaybe === "object") {
        const errorMessage = (errorMaybe as { message?: unknown }).message;
        if (typeof errorMessage === "string" && errorMessage.trim()) return errorMessage;
    }

    const messageMaybe = (body as { message?: unknown }).message;
    if (typeof messageMaybe === "string" && messageMaybe.trim()) return messageMaybe;

    return null;
}

export async function POST(request: Request) {
    const body = (await request.json().catch(() => ({}))) as SubscribeBody;
    const email = typeof body.email === "string" ? normalizeEmail(body.email) : "";
    const magnetId = typeof body.magnet === "string" ? body.magnet : "";

    if (!email || !EMAIL_PATTERN.test(email)) {
        return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    if (!magnetId || !leadMagnetLabels[magnetId]) {
        return NextResponse.json({ message: "Unknown lead magnet." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
        return NextResponse.json(
            {
                message: "Subscription is not configured yet. Please set RESEND_API_KEY and RESEND_AUDIENCE_ID.",
            },
            { status: 500 }
        );
    }

    let response: Response;
    try {
        response = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                unsubscribed: false,
            }),
            cache: "no-store",
        });
    } catch {
        return NextResponse.json(
            {
                message: "Could not subscribe right now. Please try again in a moment.",
            },
            { status: 502 }
        );
    }

    if (response.ok) {
        return NextResponse.json({
            ok: true,
            message: `Thanks. You're subscribed for "${leadMagnetLabels[magnetId]}".`,
        });
    }

    const errorBody = await response.json().catch(() => null);
    const errorMessage = getMessageFromResponseBody(errorBody) ?? "";
    const alreadySubscribed =
        isAlreadySubscribedStatus(response.status) ||
        errorMessage.toLowerCase().includes("already") ||
        errorMessage.toLowerCase().includes("exists");

    if (alreadySubscribed) {
        return NextResponse.json({
            ok: true,
            message: "You are already subscribed.",
        });
    }

    return NextResponse.json(
        {
            message: "Could not subscribe right now. Please try again in a moment.",
        },
        { status: 502 }
    );
}
