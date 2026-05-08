import type { Metadata } from "next";
import LegacyRedirect from "@/components/seo/LegacyRedirect";
import { getLegacyTopLevelRedirect, legacyTopLevelStaticParams } from "@/lib/legacy-redirects";
import { legacyRedirectMetadata } from "@/lib/seo";

export async function generateStaticParams() {
    return legacyTopLevelStaticParams;
}

export async function generateMetadata({ params }: { params: { legacy: string } }): Promise<Metadata> {
    return legacyRedirectMetadata(getLegacyTopLevelRedirect(params.legacy) ?? "/");
}

export default function TopLevelLegacyPage({ params }: { params: { legacy: string } }) {
    return (
        <LegacyRedirect
            to={getLegacyTopLevelRedirect(params.legacy) ?? "/"}
            preserveSearch={params.legacy === "login"}
        />
    );
}
