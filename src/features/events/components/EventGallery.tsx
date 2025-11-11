import { useEffect, useMemo, useRef, useState } from "react";
import type { MediaItem } from "../types";

export default function EventGallery({ media }: { media: MediaItem[] }) {
  const [index, setIndex] = useState(0);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const total = media.length;
  const safeIndex = (i: number) => (i + total) % total;

  const onPrev = () => setIndex((i) => safeIndex(i - 1));
  const onNext = () => setIndex((i) => safeIndex(i + 1));
  const active = media[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Thumbs = useMemo(
    () => media.map((m, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`h-14 w-20 overflow-hidden rounded-md border ${i === index ? "border-indigo-400" : "border-white/10"} bg-white/5`}
        aria-label={`Ver media ${i + 1}`}
      >
        {m.kind === "image" ? (
          <img src={m.thumb || (m as any).src} alt={m.alt || `Media ${i + 1}`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-slate-200">Video</div>
        )}
      </button>
    )),
    [media, index]
  );

  return (
    <div>
      <div ref={mainRef} className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[#0b1020]">
        {active.kind === "image" ? (
          <img src={(active as any).src} alt={active.alt || "Evento"} className="h-full w-full object-cover" />
        ) : active.provider === "youtube" && active.id ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${active.id}`}
            title={active.title || "Video del evento"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        ) : active.provider === "url" && active.src ? (
          <video className="h-full w-full" src={active.src} controls preload="none" />
        ) : null}

        {total > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur border border-white/15 p-2 text-white hover:bg-white/15"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 backdrop-blur border border-white/15 p-2 text-white hover:bg-white/15"
              aria-label="Siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
          {Thumbs}
        </div>
      )}
    </div>
  );
}
