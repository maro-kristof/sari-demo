import { createFileRoute } from "@tanstack/react-router";
import { legal } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms of use — Sari" },
      {
        name: "description",
        content:
          "Terms for using the Sari website, including intellectual property and product information.",
      },
      { property: "og:title", content: "Terms of use — Sari" },
      {
        property: "og:description",
        content: "Terms for using the Sari website.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/legal/terms") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/legal/terms") }],
  }),
  component: () => <LegalPage doc={legal.terms} />,
});
