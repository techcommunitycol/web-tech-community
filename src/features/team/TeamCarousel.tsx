import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { TEAM } from "./team.data";
import { slugify } from "../../utils/slugify";

const PRIORITY = ["Carolina", "Valentina", "Rina"];

function orderedTeam() {
  const pri = TEAM.filter((t) => PRIORITY.includes(t.name)).sort(
    (a, b) => PRIORITY.indexOf(a.name) - PRIORITY.indexOf(b.name)
  );
  const rest = TEAM.filter((t) => !PRIORITY.includes(t.name));
  return [...pri, ...rest];
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
      className="relative mt-8"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b1020] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b1020] to-transparent" />

      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto flex gap-6 px-4 snap-x snap-mandatory items-stretch"
      >
        {data.map((m, i) => {
          const active = i === idx;
          const slug = slugify(m.name);
          const isFeatured = PRIORITY.includes(m.name);

          return (
        <figure
  key={m.name}
  className="snap-center shrink-0 w-[78vw] sm:w-[44vw] md:w-[32vw] lg:w-[18rem] xl:w-[16rem] select-none"
>
  {/* ÚNICO <Link> de la card */}
  <Link
    to={`/team/${slugify(m.name)}`}
    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00C853]/70 rounded-2xl"
  >
    <div
      className={`card-animated-border transition-transform duration-500 group-hover:-translate-y-1 ${i === idx ? "scale-[1.01]" : "scale-[0.99]"}`}
      style={{ animationDelay: `${(i % 5) * 150}ms` as any }}
    >
      <div className="rounded-2xl bg-[#0b1020] p-3 ring-1 ring-white/10">
        {/* imagen */}
        <div className="relative rounded-xl overflow-hidden bg-black/20">
          <div className="w-full aspect-[4/5]">
            <img
              src={m.photo}
              alt={m.name}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder-avatar.png'; }}
            />
          </div>
        </div>

        <figcaption className="mt-3 text-center">
          <h3 className="text-base font-semibold text-white">{m.name}</h3>
          <p className="text-[12px] text-white/60">{m.role}</p>

          {/* “botón” visual (NO es <a>, navega porque toda la card es Link) */}
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/90 ring-1 ring-white/10 transition-colors group-hover:bg-white/10">
            Ver biografía <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </figcaption>
      </div>
    </div>
  </Link>
</figure>
          );
        })}
      </div>

      {/* controles */}
<div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
  <button
    onClick={() => step("prev")}
    className="pointer-events-auto rounded-full bg-white/10 backdrop-blur border border-white/15 p-1.5 text-white hover:bg-white/15"
    aria-label="Anterior"
  >‹</button>
  <button
    onClick={() => step("next")}
    className="pointer-events-auto rounded-full bg-white/10 backdrop-blur border border-white/15 p-1.5 text-white hover:bg-white/15"
    aria-label="Siguiente"
  >›</button>
</div>


      {/* indicadores */}
      <div className="mt-5 flex items-center justify-center gap-1.5">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Ir a ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-5 bg-white" : "w-2.5 bg-white/35"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
