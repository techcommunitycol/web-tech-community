import type { WhatWeDoItem } from "../types";

export default function WhatWeDoModalBody({ item }: { item: WhatWeDoItem }) {
  return (
    <>
      <div className="flex items-start gap-3">
        <div className="text-4xl">{item.icon}</div>
        <div>
          <h3 id="whatwedo-modal-title" className="text-xl font-semibold text-white">
            {item.title}
          </h3>
          <p className="text-slate-300 mt-1">{item.desc}</p>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-sm font-semibold text-slate-200">Problema</h4>
          <p className="text-slate-300 mt-2">{item.details.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-2 00">Resultados</h4>
          <ul className="mt-2 list-disc list-inside text-slate-300">
            {item.details.outcomes.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-slate-200">Solución (tácticas)</h4>
        <ul className="mt-2 grid md:grid-cols-2 gap-2">
          {item.details.solution.map((s) => (
            <li key={s} className="text-slate-300 flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      {item.details.tech && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-slate-200">Stack / Herramientas</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.details.tech.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
