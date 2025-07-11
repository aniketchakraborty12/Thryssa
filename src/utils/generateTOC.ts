// src/utils/generateToc.ts
export interface TocHeading {
    depth: number;
    slug: string;
    text: string;
}

export function generateToc(html: string): TocHeading[] {
    const headings: TocHeading[] = [];
    const regex = /<h([2-4]) id="([^"]+)">(.+?)<\/h\1>/g;

    let match;
    while ((match = regex.exec(html))) {
        const [, depth, slug, rawText] = match;
        const text = rawText.replace(/<[^>]+>/g, ''); // strip tags
        headings.push({ depth: parseInt(depth), slug, text });
    }

    return headings;
}
