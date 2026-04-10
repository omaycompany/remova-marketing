import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { legacyRedirectMetadata } from "@/lib/seo";

export const metadata: Metadata = legacyRedirectMetadata("/blog");

export default function IotDevicePrivacyLegacyPage() {
    return <LegacyRedirect to="/blog" />;
}
