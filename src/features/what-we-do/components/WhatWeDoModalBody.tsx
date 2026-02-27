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
    <div className="space-y-5">
      <header className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
        <div
          className="grid h-12 w-12 place-items-center rounded-xl border border-primary/15 bg-primary/10 shadow-[0_0_20px_rgba(54,151,156,0.1)]"
          aria-hidden
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div>
          {item.tag ? <div className="mb-1 text-xs uppercase tracking-[0.18em] text-gray-300">{item.tag}</div> : null}
          <h3 className="text-xl font-bold text-gray-100 sm:text-2xl">{item.title}</h3>
        </div>
      </header>

      <section className="text-sm text-gray-300">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
          <p className="leading-relaxed">{item.desc}</p>
        </div>

        {item.details?.problem && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <h4 className="text-sm font-semibold text-gray-200">Problema</h4>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.details.problem}</p>
          </div>
        )}

        {item.details?.solution && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <h4 className="text-sm font-semibold text-gray-200">Solución</h4>
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-300">
              {item.details.solution.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}

        {item.details?.outcomes && (
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <h4 className="text-sm font-semibold text-gray-200">Resultados</h4>
            <ul className="mt-3 list-disc list-inside space-y-1 text-sm text-gray-300">
              {item.details.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        )}

        {item.tech && (
          <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            {item.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-gray-200">
                {t}
              </span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
