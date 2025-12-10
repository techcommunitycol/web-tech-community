import type { WhatWeDoItem } from "../types";
import type { IconType } from "react-icons";
import { FiCode, FiMessageSquare, FiUsers, FiGlobe } from "react-icons/fi";

const ICONS: Record<string, IconType> = {
  "eventos-y-talleres": FiCode,
  "intercambios-de-idiomas": FiMessageSquare,
  "mentorias-y-paneles": FiUsers,
  "alianzas-y-comunidad": FiGlobe,
};

export default function WhatWeDoModalBody({ item }: { item: WhatWeDoItem }) {
  const Icon = ICONS[item.slug] ?? FiCode;

  return (
    <div>
      <header className="flex items-center gap-4">
        <div
          className="h-12 w-12 rounded-full grid place-items-center"
          style={{ background: "var(--color-primary-rgba-12)" }}
          aria-hidden
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
          {item.tag ? <div className="text-xs text-gray-300 mt-1 uppercase">{item.tag}</div> : null}
        </div>
      </header>

      <section className="mt-4 text-sm text-gray-300">
        <p>{item.desc}</p>

        {item.details?.problem && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-200">Problema</h4>
            <p className="mt-1 text-sm text-gray-300">{item.details.problem}</p>
          </div>
        )}

        {item.details?.solution && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-200">Solución</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-300 space-y-1">
              {item.details.solution.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {item.details?.outcomes && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-200">Resultados</h4>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-300 space-y-1">
              {item.details.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        )}

        {item.tech && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span key={t} className="text-xs bg-[rgba(90,96,99,0.06)] px-2 py-1 rounded text-gray-200">
                {t}
              </span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
