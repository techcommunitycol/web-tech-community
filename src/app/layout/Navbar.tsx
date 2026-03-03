import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../../shared/lib/constants";
import techCommunityLogoSinFondo from "../../assets/techCommunityLogoSinFondo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[linear-gradient(90deg,rgba(7,12,24,0.94),rgba(12,20,38,0.9),rgba(7,12,24,0.94))] shadow-[0_10px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl md:static">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <nav className="relative flex items-center justify-between overflow-hidden px-4 py-3 md:px-6 md:py-4">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-[radial-gradient(circle_at_left,rgba(54,151,156,0.12),transparent_65%)] md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-[radial-gradient(circle_at_right,rgba(10,73,165,0.12),transparent_65%)] md:w-40" />
        <div className="flex items-center gap-4">
          <a href="/" className="inline-flex items-center gap-5">
            <img 
            src={techCommunityLogoSinFondo} 
            alt="TechCommunity" 
            className="h-10 w-auto drop-shadow-[0_0_18px_rgba(54,151,156,0.2)] md:h-14 lg:h-11"
            />
          </a>
        </div>

        <div className="relative z-10 hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <Link
            to="/calendar"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:border-primary/30 hover:bg-white/[0.08] focus:outline-none"
            title="Calendario de eventos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 7.5v12A1.5 1.5 0 004.5 21z" />
            </svg>
            <span>Calendario</span>
          </Link>
          <a
            href="#connect"
            className="ml-2 inline-flex items-center rounded-xl border border-primary/30 bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(54,151,156,0.2)] transition hover:brightness-95 focus:outline-none"
          >
            Contáctanos
          </a>
        </div>

        <div className="relative z-10 flex items-center gap-2 md:hidden">
          <Link
            to="/calendar"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white shadow-lg transition hover:border-primary/30 hover:bg-white/[0.08] focus:outline-none"
            title="Calendario de eventos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 7.5v12A1.5 1.5 0 004.5 21z" />
            </svg>
          </Link>
          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] p-2 text-gray-200 hover:bg-[rgba(255,255,255,0.08)]"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

  {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-md overflow-y-auto min-h-[100dvh] w-full"
          onClick={closeMenu}
          style={{
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain'
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="relative w-full min-h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <div className="flex items-center">
                <img 
                  src={techCommunityLogoSinFondo} 
                  alt="TechCommunity" 
                  className="h-10 w-auto drop-shadow-[0_0_16px_rgba(54,151,156,0.18)]"
                />
              </div>
              <button
                onClick={closeMenu}
                aria-label="Cerrar menú"
                className="rounded-full border border-white/10 p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = window.location.pathname === link.href;
                return (
                  <a
                    key={`mobile-${link.href}`}
                    href={link.href}
                    onClick={closeMenu}
                    className={`flex items-center rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                      isActive 
                        ? 'bg-primary/10 text-primary ring-1 ring-primary/20' 
                        : 'text-gray-200 hover:bg-white/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="ml-2 text-primary">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    )}
                  </a>
                );
              })}
              <Link
                to="/calendar"
                onClick={closeMenu}
                className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-lg font-medium text-gray-200 transition hover:border-primary/20 hover:bg-white/[0.05]"
                title="Calendario de eventos"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 7.5h16.5M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 003 7.5v12A1.5 1.5 0 004.5 21z" />
                </svg>
                Calendario
              </Link>
            <div className="border-t border-white/10 p-4">
              <a
                href="#connect"
                onClick={closeMenu}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-primary/90 hover:shadow-primary/20"
              >
                <span>Contáctanos</span>
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
