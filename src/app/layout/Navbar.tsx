import { useState } from "react";
import { NAV_LINKS } from "../../shared/lib/constants";
import navbarLogo from "../../assets/techcommunity/logo_white_transparent.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/5 border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={navbarLogo} alt="TechCommunity Logo" className="h-12 w-auto" />
        </a>
        <nav className="hidden md:flex gap-6 text-sm text-slate-200">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 py-3 space-y-2">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-slate-200"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
