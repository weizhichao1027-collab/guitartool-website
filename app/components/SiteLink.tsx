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
 * Internal links deliberately use native document navigation. Vinext's
 * client-side Next Link prefetch currently fails in the hosted Sites runtime,
 * which prevents clicks from navigating. Native anchors also keep the static
 * GitHub Pages base path through RUNTIME_BASE_PATH.
 */
export function SiteLink({ href, children, ...props }: SiteLinkProps) {
  return <a href={siteHref(href)} {...props}>{children}</a>;
}
