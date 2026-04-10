interface ItemListEntry {
    name: string;
    url: string;
}

interface ItemListSchemaProps {
    name: string;
    items: ItemListEntry[];
}

export default function ItemListSchema({ name, items }: ItemListSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: item.url,
        })),
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
