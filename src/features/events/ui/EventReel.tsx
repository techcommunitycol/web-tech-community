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
      className="relative mt-6 sm:mt-8"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >

      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-3 sm:gap-4 md:gap-6 px-4 items-stretch"
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
              className={`snap-center shrink-0 w-[85vw] sm:w-[48vw] md:w-[40vw] lg:w-[28rem] aspect-[16/13] rounded-2xl sm:rounded-3xl ring-1 ring-white/10 bg-gray-900 overflow-hidden relative group transition-transform duration-500 ${
                i === idx ? "scale-[1.02]" : "scale-100"
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
              <figcaption className="absolute left-2 right-2 sm:left-3 sm:right-3 bottom-2 sm:bottom-3 rounded-lg sm:rounded-xl bg-black/50 px-2 sm:px-3 py-1.5 sm:py-2 text-white/90 backdrop-blur">
                <div className="font-semibold text-sm sm:text-base line-clamp-1">{evt.title}</div>
                <div className="text-[10px] sm:text-[11px] text-slate-200">
                  {new Date(evt.dateISO).toLocaleDateString()} {evt.city ? `· ${evt.city}` : ""}
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-1 sm:px-2">
        <button
          onClick={() => step("prev")}
          className="pointer-events-auto rounded-full bg-white/10 backdrop-blur border border-white/15 p-1.5 sm:p-2 text-sm sm:text-base text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => step("next")}
          className="pointer-events-auto rounded-full bg-white/10 backdrop-blur border border-white/15 p-1.5 sm:p-2 text-sm sm:text-base text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <div className="mt-4 sm:mt-5 flex items-center justify-center gap-1 sm:gap-1.5">
        {events.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Ir a evento ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-4 sm:w-5 bg-white" : "w-2 sm:w-2.5 bg-white/35 hover:bg-white/50"
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
