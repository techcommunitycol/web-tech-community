import { useState } from "react";
import { NAV_LINKS } from "../../shared/lib/constants";
import techCommunityLogoSinFondo from "../../assets/techCommunityLogoSinFondo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-4">
          <a href="/" className="inline-flex items-center gap-5 ml-8 md:ml-16">
            <img 
            src={techCommunityLogoSinFondo} 
            alt="TechCommunity" 
            className="h-10 md:h-14 lg:h-11 w-auto"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="#connect"
            className="ml-2 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-95 focus:outline-none"
          >
            Contáctanos
          </a>

        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:bg-[rgba(255,255,255,0.03)]"
          aria-label="Abrir menú"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

    </header>
  );
}
