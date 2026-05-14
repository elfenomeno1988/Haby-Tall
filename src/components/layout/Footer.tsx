import { siteConfig } from "@/data/site-config";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="snap-start border-t border-rule">
      <div className="container-editorial flex flex-wrap items-center justify-between gap-4 py-5 text-[11px] text-faint">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex gap-5">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 hover:text-ink"
          >
            LinkedIn <ArrowUpRight size={9} />
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0.5 hover:text-ink"
          >
            Instagram <ArrowUpRight size={9} />
          </a>
        </div>
        <p>{siteConfig.location}</p>
      </div>
    </footer>
  );
}
