import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { legacyRedirectMetadata } from "@/lib/seo";

export const metadata: Metadata = legacyRedirectMetadata("/blog");

export default function GdprComplianceFailuresLegacyPage() {
    return <LegacyRedirect to="/blog" />;
}
