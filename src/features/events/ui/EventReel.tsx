import { useEffect, useRef, useState } from "react";
import type { EventMeta } from "../types";
import Modal from "../../../shared/components/Modal";
import EventModalBody from "../components/EventModalBody";

type Props = { events: EventMeta[] };

export default function EventReel({ events }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<EventMeta | null>(null);

  const visible = () =>
    window.innerWidth >= 1024
      ? 2
      : window.innerWidth >= 640
      ? 2
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
      if (!hover) setIdx((i) => (i + 1) % events.length);
      id = window.setTimeout(tick, 4500);
    };
    id = window.setTimeout(tick, 4500);
    return () => {
      if (id !== undefined) clearTimeout(id);
    };
  }, [hover, events.length]);

  const step = (dir: "prev" | "next") => {
    const jump = visible();
    setIdx((i) => (i + (dir === "next" ? jump : -jump) + events.length) % events.length);
  };

  return (
    <section
      className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.68),rgba(17,17,17,0.78))] px-3 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:mt-8 sm:px-4 sm:py-6"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
      <div className="relative z-10 mb-4 flex items-center justify-between px-1 sm:px-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Eventos destacados
          </p>
          <p className="mt-1 text-sm text-slate-300">
            Explora momentos clave y abre el detalle de cada evento.
          </p>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300 md:inline-flex">
          Carrusel interactivo
        </div>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar relative z-10 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 sm:gap-4 md:gap-6"
      >
        {events.map((evt, i) => {
          const first = evt.media[0];
          const cover =
            first?.kind === "image"
              ? (first as any).src
              : "/placeholder-cover.jpg";

          return (
            <figure
              key={evt.id}
              className={`relative aspect-[16/13] w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-gray-900 ring-1 ring-white/10 transition-all duration-500 sm:w-[48vw] sm:rounded-3xl md:w-[40vw] lg:w-[28rem] ${
                i === idx
                  ? "scale-[1.02] shadow-[0_20px_60px_rgba(54,151,156,0.14)] ring-primary/20"
                  : "scale-100"
              }`}
            >
              <button
                className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-2xl sm:rounded-3xl"
                aria-label={`Abrir ${evt.title}`}
                onClick={() => { setActive(evt); setOpen(true); }}
              />
              {cover && (
                <img
                  src={cover}
                  alt={evt.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <figcaption className="absolute bottom-2 left-2 right-2 rounded-lg bg-black/45 px-2 py-1.5 text-white/90 backdrop-blur-md sm:bottom-3 sm:left-3 sm:right-3 sm:rounded-xl sm:px-3 sm:py-2">
                <div className="font-semibold text-sm sm:text-base line-clamp-1">{evt.title}</div>
                <div className="text-[10px] sm:text-[11px] text-slate-200">
                  {new Date(evt.dateISO).toLocaleDateString()} {evt.city ? `· ${evt.city}` : ""}
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2 sm:px-3">
        <button
          onClick={() => step("prev")}
          className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:h-9 sm:w-9"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => step("next")}
          className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:h-9 sm:w-9"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div className="relative z-10 mt-4 flex items-center justify-center gap-1 sm:mt-5 sm:gap-1.5">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Ir a evento ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-4 bg-primary sm:w-5" : "w-2 bg-white/35 hover:bg-white/50 sm:w-2.5"
            }`}
          />
        ))}
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} titleId="event-modal-title">
        {active && <EventModalBody evt={active} />}
        <div className="mt-4 sm:mt-6 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </section>
  );
}
