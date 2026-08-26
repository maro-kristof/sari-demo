import { createFileRoute } from "@tanstack/react-router";
import { legal } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";
import { absoluteUrl, breadcrumbLd } from "@/lib/seo";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — Sari" },
      {
        name: "description",
        content:
          "How Sari by Tajna Vineyards & Winery handles the details you send through our inquiry and newsletter forms.",
      },
      { property: "og:title", content: "Privacy policy — Sari" },
      {
        property: "og:description",
        content: "How Sari handles your personal data.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/legal/privacy") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/legal/privacy") }],
  }),
  component: () => <LegalPage doc={legal.privacy} />,
});
