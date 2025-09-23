import { useEffect, useRef, useState } from "react";

import img1 from "../../assets/imgEvent1.jpeg";
import img2 from "../../assets/imgEvent2.jpeg";
import img3 from "../../assets/imgEvent3.jpeg";
import img4 from "../../assets/imgEvent4.jpeg";
import img5 from "../../assets/imgEvent5.jpeg";
import img6 from "../../assets/imgEvent6.jpeg";
import img7 from "../../assets/imgEvent7.jpeg";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7];

export default function EventReel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

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
    return () => {
      cancelAnimationFrame(id);
    };
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

      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto snap-x snap-mandatory flex gap-6 px-2"
      >
        {IMAGES.map((src, i) => (
          <figure
            key={i}
            className="snap-start shrink-0 w-[20rem] md:w-[28rem] h-64 md:h-72 rounded-3xl ring-2 ring-white/15 bg-white/5 overflow-hidden relative group"
          >
            <img
              src={src}
              alt={`Evento ${i + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
            <figcaption className="absolute bottom-2 left-2 rounded-full bg-black/40 px-2 py-1 text-xs text-white/90 backdrop-blur">
              Evento #{i + 1}
            </figcaption>
          </figure>
        ))}
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
    </div>
  );
}
