import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { legacyRedirectMetadata } from "@/lib/seo";

export const metadata: Metadata = legacyRedirectMetadata("/");

export default function ImportYetiRemovalGuideLegacyPage() {
    return <LegacyRedirect to="/" />;
}
