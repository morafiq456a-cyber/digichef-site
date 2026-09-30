import { useEffect } from "react";
import { config } from "@/config";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [kind, key] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=")
      .map((s) => s.replace(/"/g, ""));
    el.setAttribute(kind, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
  void attr;
}

/** Sets per-page title, meta description and Open Graph tags. */
export function useSEO({ title, description, path = "/" }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} — ${config.brandName}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    const url = `${window.location.origin}${path}`;
    setMeta('meta[property="og:url"]', "content", url);
  }, [title, description, path]);
}
