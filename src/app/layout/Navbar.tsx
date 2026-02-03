import { useState } from "react";
import { NAV_LINKS } from "../../shared/lib/constants";
import techCommunityLogoSinFondo from "../../assets/techCommunityLogoSinFondo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed md:static top-0 left-0 right-0 z-50 bg-gray-900/80">
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

      {open && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm overflow-y-auto min-h-[100dvh] w-full"
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
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center">
                <img 
                  src={techCommunityLogoSinFondo} 
                  alt="TechCommunity" 
                  className="h-10 w-auto"
                />
              </div>
              <button
                onClick={closeMenu}
                aria-label="Cerrar menú"
                className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-gray-800 transition-colors"
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
                    className={`flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      isActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-200 hover:bg-gray-800/50'
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
            <div className="p-4 border-t border-gray-800">
              <a
                href="#connect"
                onClick={closeMenu}
                className="w-full flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
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
