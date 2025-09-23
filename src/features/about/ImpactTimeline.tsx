const MILESTONES = [
  { year: "2022", title: "Nacimiento",  desc: "Meetups pequeños, primeros talleres y canal de comunidad." },
  { year: "2023", title: "Aceleración", desc: "Mentorías 1:1, capítulos temáticos y alianzas con comunidades amigas." },
  { year: "2024–25", title: "Expansión", desc: "Más ciudades, programas para niñez y mujeres, y empleabilidad." },
];

export default function ImpactTimeline() {
  return (
    <div className="mt-12">
      <div className="hidden md:grid grid-cols-3 gap-6 relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-brand-400/40 via-brand-600/40 to-brand-800/40" />
        {MILESTONES.map((m) => (
          <div key={m.year} className="relative text-center">
            <div className="mx-auto size-10 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 ring-4 ring-[#0b1020] shadow-md" />
            <div className="mt-4 rounded-2xl border border-white/10 bg-[#121a32]/80 backdrop-blur p-6 shadow-lg">
              <div className="text-xl font-bold">{m.year}</div>
              <div className="mt-1 text-sm font-semibold text-slate-300">{m.title}</div>
              <p className="mt-2 text-slate-400">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden space-y-6 relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />
        {MILESTONES.map((m) => (
          <div key={m.year} className="relative pl-10">
            <div className="absolute left-1.5 top-2 size-6 rounded-full bg-gradient-to-br from-brand-400 to-brand-700 ring-2 ring-[#0b1020]" />
            <div className="rounded-xl border border-white/10 bg-[#121a32]/80 backdrop-blur p-4 shadow">
              <div className="text-sm font-bold">{m.year} · {m.title}</div>
              <p className="mt-1 text-sm text-slate-300">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
