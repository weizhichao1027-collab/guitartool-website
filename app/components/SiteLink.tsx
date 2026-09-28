import type { AnchorHTMLAttributes } from "react";
import { RUNTIME_BASE_PATH } from "@/app/lib/site";

type SiteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

function siteHref(href: string) {
  if (href.startsWith("#") || /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//")) {
    return href;
  }

  const path = href.startsWith("/") ? href : `/${href}`;
  return `${RUNTIME_BASE_PATH}${path}`;
}

/**
 * Native anchors keep the static GitHub Pages base path through
 * RUNTIME_BASE_PATH without relying on client-side routing.
 */
export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return <a href={siteHref(href)} {...props}>{children}</a>;
}
