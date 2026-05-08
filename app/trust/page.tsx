import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { legacyRedirectMetadata } from "@/lib/seo";

export const metadata: Metadata = legacyRedirectMetadata("/privacy");

export default function TrustLegacyPage() {
    return <LegacyRedirect to="/privacy" />;
}
