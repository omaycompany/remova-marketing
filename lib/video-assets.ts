const defaultPublicVideoBaseUrl = "https://assets.remova.org";

export function normalizePublicVideoBaseUrl(value: string | undefined) {
    const normalized = (value?.trim() || defaultPublicVideoBaseUrl).replace(/\/+$/, "");

    let url: URL;
    try {
        url = new URL(normalized);
    } catch {
        throw new Error(`R2_PUBLIC_BASE_URL must be a full public URL, received "${value}".`);
    }

    if (!["http:", "https:"].includes(url.protocol)) {
        throw new Error("R2_PUBLIC_BASE_URL must use http or https.");
    }

    if (url.hostname === "remova.org" || url.hostname === "www.remova.org") {
        throw new Error("R2_PUBLIC_BASE_URL must point to the R2 asset hostname, not remova.org or www.remova.org.");
    }

    return normalized;
}

export const publicVideoBaseUrl = normalizePublicVideoBaseUrl(process.env.R2_PUBLIC_BASE_URL);

export function videoAssetUrl(pathname: string) {
    const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
    if (!normalized.startsWith("/videos/")) {
        throw new Error(`Video asset paths must start with /videos/, received "${pathname}".`);
    }

    return `${publicVideoBaseUrl}${normalized}`;
}
