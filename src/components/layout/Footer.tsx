import Link from "next/link";
import Image from "next/image";
import { mainNav } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      {/* Main row */}
      <div className="container-editorial grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/brand/haby-tall-monogram-green.png"
              alt="HT"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            <span className="font-heading text-sm font-semibold">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-[240px] text-[13px] leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="section-label">Navigation</p>
          <nav className="mt-4 flex flex-col gap-2.5">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="section-label">Contact</p>
          <div className="mt-4 flex flex-col gap-2.5 text-[13px] text-muted">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-ink">
              {siteConfig.email}
            </a>
            <p>{siteConfig.location}</p>
          </div>
        </div>

        {/* Social */}
        <div>
          <p className="section-label">Social</p>
          <div className="mt-4 flex flex-col gap-2.5 text-[13px]">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted hover:text-ink"
            >
              LinkedIn <ArrowUpRight size={11} />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted hover:text-ink"
            >
              Instagram <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-rule">
        <div className="container-editorial flex items-center justify-between py-5">
          <p className="text-[11px] text-faint">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-[11px] text-faint">{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  );
}
