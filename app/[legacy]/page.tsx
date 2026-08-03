import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyTopLevelRedirect, legacyTopLevelStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

type LegacyRouteProps = { params: Promise<{ legacy: string }> };

export async function generateStaticParams() {
    return legacyTopLevelStaticParams;
}

export async function generateMetadata({ params }: LegacyRouteProps): Promise<Metadata> {
    const { legacy } = await params;
    return legacyRedirectMetadata(getLegacyTopLevelRedirect(legacy) ?? "/");
}

export default async function TopLevelLegacyPage({ params }: LegacyRouteProps) {
    const { legacy } = await params;
    return (
        <LegacyRedirect
            to={getLegacyTopLevelRedirect(legacy) ?? "/"}
            preserveSearch={legacy === "login"}
        />
    );
}
