import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { nav, brand, images } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-border bg-cream text-ink"
          : "bg-transparent text-cream",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-20 md:px-10">
        <Link to="/" aria-label={nav.home} className="flex items-center">
          <img
            src={images.wordmark}
            alt={brand.wordmarkAlt}
            className={cn(
              "h-10 w-auto md:h-12",
              solid && "invert-100 brightness-0",
            )}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 min-[900px]:flex">
          {nav.links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow transition-opacity hover:opacity-60"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? nav.menuClose : nav.menuOpen}
          className="grid min-h-11 min-w-11 place-items-center min-[900px]:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={cn(
                "absolute left-0 block h-px w-6 bg-current transition-transform",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-6 bg-current transition-transform",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-cream px-6 pb-8 pt-4 min-[900px]:hidden"
        >
          <ul className="space-y-1">
            {nav.links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block py-3 text-2xl font-light text-ink"
                  activeProps={{ className: "text-gold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
