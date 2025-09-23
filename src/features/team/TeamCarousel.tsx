import { useEffect, useMemo, useRef, useState } from "react";
import { TEAM } from "./team.data";

const PRIORITY = ["Carolina", "Valentina", "Rina"];

function orderedTeam() {
  const pri = TEAM.filter(t => PRIORITY.includes(t.name))
    .sort((a, b) => PRIORITY.indexOf(a.name) - PRIORITY.indexOf(b.name));
  const rest = TEAM.filter(t => !PRIORITY.includes(t.name));
  return [...pri, ...rest];
}

export default function TeamCarousel() {
  const data = useMemo(orderedTeam, []);
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);

  const visible = () =>
    window.innerWidth >= 1280 ? 5 :
    window.innerWidth >= 1024 ? 4 :
    window.innerWidth >= 640  ? 3 : 1;

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
      if (!hover) setIdx(i => (i + 1) % data.length);
      id = window.setTimeout(tick, 4200);
    };
    id = window.setTimeout(tick, 4200);
    return () => {
      if (id !== undefined) {
        clearTimeout(id);
      }
    };
  }, [hover, data.length]);

  const step = (dir: "prev" | "next") => {
    const jump = visible();
    setIdx(i => (i + (dir === "next" ? jump : -jump) + data.length) % data.length);
  };

  return (
    <section
      className="relative mt-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b1020] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b1020] to-transparent" />

      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto flex gap-6 px-4 snap-x snap-mandatory items-start"
      >
        {data.map((m, i) => {
          const active = i === idx;
          return (
            <figure
              key={m.name}
              className="snap-center shrink-0 w-[68vw] sm:w-[38vw] md:w-[28vw] lg:w-[16rem] xl:w-[14rem] select-none"
            >
              <div className="relative mx-auto aspect-square max-w-[11rem] sm:max-w-[12rem] lg:max-w-[10rem] xl:max-w-[9.5rem]">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-400/20 via-brand-700/15 to-brand-900/20 blur-xl" />
                <div className="rounded-full bg-white p-1.5 shadow-xl ring-1 ring-black/5">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className={`rounded-full w-full h-full object-cover transition-transform duration-400 ${active ? "scale-[1.02]" : "scale-[0.98]"}`}
                  />
                </div>
              </div>
              <figcaption className={`mt-2 text-center ${active ? "opacity-100" : "opacity-80"}`}>
                <h3 className="text-sm font-semibold">{m.name}</h3>
                <p className="text-[11px] text-slate-400">{m.role}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button
          onClick={() => step("prev")}
          className="rounded-full bg-white/10 backdrop-blur border border-white/15 p-1.5 text-white hover:bg-white/15"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => step("next")}
          className="rounded-full bg-white/10 backdrop-blur border border-white/15 p-1.5 text-white hover:bg-white/15"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Ir a ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-white" : "w-2.5 bg-white/35"}`}
          />
        ))}
      </div>
    </section>
  );
}
