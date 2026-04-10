import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { legacyRedirectMetadata } from "@/lib/seo";

export const metadata: Metadata = legacyRedirectMetadata("/");

export default function AboutLegacyPage() {
    return <LegacyRedirect to="/" />;
}
