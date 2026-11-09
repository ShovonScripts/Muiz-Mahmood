/**
 * Renders a schema.org JSON-LD block into the server HTML so crawlers see
 * structured data without executing JavaScript.
 * Uses suppressHydrationWarning to avoid Next.js dev warning about script tags.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}