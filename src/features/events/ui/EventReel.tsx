import { useEffect, useRef, useState } from "react";
import type { EventMeta } from "../types";
import Modal from "../../../shared/components/Modal";
import EventModalBody from "../components/EventModalBody";

type Props = { events: EventMeta[] };

export default function EventReel({ events }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<EventMeta | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let id: number;
    const tick = () => {
      if (!isHover) {
        el.scrollLeft += 1.2;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollTo({ left: 0, behavior: "instant" as ScrollBehavior });
        }
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isHover]);

  const move = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.9 * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <div
      className="relative mt-10"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b1020] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b1020] to-transparent" />

      <div ref={trackRef} className="no-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-6 px-2">
        {events.map((evt, i) => {
          // toma la primera media para el cover del reel
          const first = evt.media[0];
          const cover =
            first?.kind === "image"
              ? (first as any).src
              : "/placeholder-cover.jpg"; // opcional

          return (
            <figure
              key={evt.id}
              className="snap-start shrink-0 w-[20rem] md:w-[28rem] h-64 md:h-72 rounded-3xl ring-2 ring-white/15 bg-white/5 overflow-hidden relative group"
            >
              <button
                className="absolute inset-0 z-10"
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
              <figcaption className="absolute left-2 right-2 bottom-2 rounded-xl bg-black/40 px-3 py-2 text-xs text-white/90 backdrop-blur">
                <div className="font-semibold">{evt.title}</div>
                <div className="text-[11px] text-slate-200">
                  {new Date(evt.dateISO).toLocaleDateString()} {evt.city ? `· ${evt.city}` : ""}
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-2">
        <button
          onClick={() => move("prev")}
          className="rounded-full bg-white/10 backdrop-blur border border-white/15 p-2 text-white hover:bg-white/15"
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          onClick={() => move("next")}
          className="rounded-full bg-white/10 backdrop-blur border border-white/15 p-2 text-white hover:bg-white/15"
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} titleId="event-modal-title">
        {active && <EventModalBody evt={active} />}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
}
