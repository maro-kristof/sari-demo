import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Caveat wrapper for taglines, product names and short labels. Never paragraphs. */
export function HandwrittenText({
  children,
  className,
  rotate = 0,
  as: Tag = "span",
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  as?: "span" | "p" | "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      style={rotate ? { display: "inline-block", transform: `rotate(${rotate}deg)` } : undefined}
      className={cn("hand", className)}
    >
      {children}
    </Tag>
  );
}
