import type { WhatWeDoItem } from "../types";

type Props = {
  item: WhatWeDoItem;
  onOpen: (item: WhatWeDoItem) => void;
};

export default function WhatWeDoCard({ item, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="relative group w-full text-left bg-[#121a32] rounded-2xl border border-white/10 p-6 md:p-8 overflow-hidden transition-all hover:scale-[1.02] hover:border-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label={`Abrir detalles de ${item.title}`}
    >
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
      <div className="text-4xl mb-4">{item.icon}</div>
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-indigo-300 text-sm">
        Ver más <svg width="16" height="16" viewBox="0 0 24 24" className="inline"><path fill="currentColor" d="M13.172 12L8.222 7.05l1.414-1.414L16 12l-6.364 6.364l-1.414-1.414z"/></svg>
      </span>
    </button>
  );
}
