import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TEAM } from "./team.data";
import { slugify } from "../../utils/slugify";



function orderedTeam() {
  return TEAM; 
}

export default function TeamCarousel() {
  const data = useMemo(orderedTeam, []);
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);

  const visible = () =>
    window.innerWidth >= 1280
      ? 5
      : window.innerWidth >= 1024
      ? 4
      : window.innerWidth >= 640
      ? 3
      : 1;

  const snapTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;

    const left = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2; 
    el.scrollTo({ left, behavior: "smooth" });
  };

  useEffect(() => {
    snapTo(idx);
    const onResize = () => snapTo(idx);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [idx]);

  useEffect(() => {
    let id: number | undefined;
    const tick = () => {
      if (!hover) setIdx((i) => (i + 1) % data.length);
      id = window.setTimeout(tick, 4200);
    };
    id = window.setTimeout(tick, 4200);
    return () => {
      if (id !== undefined) clearTimeout(id);
    };
  }, [hover, data.length]);

  const step = (dir: "prev" | "next") => {
    const jump = visible();
    setIdx(
      (i) => (i + (dir === "next" ? jump : -jump) + data.length) % data.length
    );
  };

  return (
    <section
      className="relative mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.75),rgba(17,17,17,0.85))] px-3 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:px-4 sm:py-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[rgba(15,23,42,0.95)] to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[rgba(15,23,42,0.95)] to-transparent sm:w-16" />

      <div className="relative z-10 mb-4 flex items-center justify-between px-1 sm:px-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Equipo core
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Conoce a las personas detrás de la comunidad.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar relative z-10 flex snap-x snap-mandatory items-stretch gap-6 overflow-x-auto px-4"
      >
        {data.map((m, i) => {
          return (
            <figure
              key={m.name}
              className="snap-center shrink-0 w-[78vw] sm:w-[44vw] md:w-[32vw] lg:w-[18rem] xl:w-[16rem] select-none"
            >
              <Link
                to={`/team/${slugify(m.name)}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]/70 rounded-2xl"
              >
                <div

                  className={`card-animated-border transition-transform duration-500 group-hover:-translate-y-1 ${
                    i === idx ? "scale-[1.01]" : "scale-[0.995]"
                  }`}
                  style={{ animationDelay: `${(i % 5) * 150}ms` as any }}
                >
                  <div className="rounded-2xl  from-gray-700 p-3 ring-1 ring-white/10">
                    <div className="relative rounded-xl overflow-hidden bg-black/20">
                      <div className="w-full aspect-[4/5]">
                        <img
                          src={m.photo}
                          alt={m.name}
                          loading="lazy"
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              "/placeholder-avatar.png";
                          }}
                        />
                      </div>
                    </div>

                    <figcaption className="mt-3 text-center">
                      <h3 className="text-base font-semibold text-white">
                        {m.name}
                      </h3>
                      <p className="text-[12px] text-white/60">{m.role}</p>
                     <br></br>
                     <span className="inline-flex items-center gap-2 rounded-xl border border-gray-600 hover:border-primary/30 px-5 py-3 text-sm font-semibold text-gray-200 group">
                        Ver biografía
                        <span className="transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </span>

                    </figcaption>
                  </div>
                </div>
              </Link>
            </figure>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2 sm:px-3">
        <button
          onClick={() => step("prev")}
          className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white backdrop-blur transition hover:bg-white/15 sm:h-9 sm:w-9"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => step("next")}
          className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white backdrop-blur transition hover:bg-white/15 sm:h-9 sm:w-9"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div className="relative z-10 mt-5 flex items-center justify-center gap-1.5">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Ir a ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-5 bg-primary" : "w-2.5 bg-white/35"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
