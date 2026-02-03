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
    <article className="h-full flex flex-col justify-between rounded-xl border border-gray-700 bg-[rgba(255,255,255,0.02)] p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
      <div>
        {image ? (
          <img
            src={image}
            alt={item.title ?? ""}
            className="h-12 w-12 rounded-md object-cover mb-4"
          />
        ) : (
          <div
            className="h-12 w-12 rounded-full mb-4 grid place-items-center"
            style={{ background: "rgba(90,96,99,0.06)" }}
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
              className="text-xs bg-[rgba(90,96,99,0.08)] px-2 py-1 rounded text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={() => onOpen(item)}
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-gray-200 hover:opacity-95"
        >
          Ver más
        </button>
        {tag ? (
          <span className="text-xs uppercase tracking-wide text-gray-200">
            {tag}
          </span>
        ) : null}
      </div>
    </article>
  );
}
