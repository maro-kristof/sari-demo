import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { images } from "../content/site";
import { SITE_URL, absoluteUrl } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sari — wine culture without the alcohol" },
      {
        name: "description",
        content:
          "Sari is a premium non alcoholic sparkling alternative to wine, made by winemakers from botanicals and fruit.",
      },
      { name: "author", content: "Tajna Vineyards & Winery" },
      { property: "og:site_name", content: "Sari" },
      { property: "og:title", content: "Sari — wine culture without the alcohol" },
      {
        property: "og:description",
        content:
          "A premium non alcoholic sparkling alternative to wine, made by winemakers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&family=Caveat:wght@400;500&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: "Sari",
              legalName: "TAJNA s.r.o.",
              url: SITE_URL,
              logo: absoluteUrl(images.wordmark),
              image: absoluteUrl(images.hero),
              email: "hello@sarisparkling.com",
              description:
                "Sari is a premium non alcoholic sparkling alternative to wine, made by winemakers from botanicals, fruit and verjuice.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Levická 743",
                postalCode: "952 01",
                addressLocality: "Vráble",
                addressCountry: "SK",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  email: "hello@sarisparkling.com",
                  availableLanguage: ["en", "sk"],
                },
              ],
              sameAs: ["https://www.instagram.com/sari_sparkling/"],
            },
            {
              "@type": "Brand",
              "@id": `${SITE_URL}/#brand`,
              name: "Sari",
              logo: absoluteUrl(images.wordmark),
              url: SITE_URL,
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              name: "Sari",
              url: SITE_URL,
              inLanguage: "en",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <main id="main">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
