import type { WhatWeDoItem } from "../types";
import type { IconType } from "react-icons";
import { FiCode, FiMessageSquare, FiUsers, FiGlobe } from "react-icons/fi";

type Props = {
  item: WhatWeDoItem;
  onOpen: (item: WhatWeDoItem) => void;
};

const ICONS: Record<string, IconType> = {
  "eventos-y-talleres": FiCode,
  "intercambios-de-idiomas": FiMessageSquare,
  "mentorias-y-paneles": FiUsers,
  "alianzas-y-comunidad": FiGlobe,
};

export default function WhatWeDoCard({ item, onOpen }: Props) {
  const image = item.image;
  const tag = item.tag;
  const tech = item.tech ?? [];
  const Icon = ICONS[item.slug] ?? FiCode;

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_60px_rgba(54,151,156,0.12)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
      <div>
        {image ? (
          <img
            src={image}
            alt={item.title ?? ""}
            className="mb-4 h-12 w-12 rounded-xl object-cover ring-1 ring-white/10"
          />
        ) : (
          <div
            className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-primary/15 bg-primary/10 shadow-[0_0_20px_rgba(54,151,156,0.1)]"
            aria-hidden
          >
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-200">{item.title}</h3>
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">{item.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => onOpen(item)}
          className="inline-flex items-center rounded-xl border border-primary/30 bg-primary px-4 py-2 text-sm font-semibold text-gray-200 shadow-[0_12px_28px_rgba(54,151,156,0.14)] hover:opacity-95"
        >
          Ver más
        </button>
        {tag ? (
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] uppercase tracking-wide text-gray-200">
            {tag}
          </span>
        ) : null}
      </div>
    </article>
  );
}
