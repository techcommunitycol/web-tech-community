const MILESTONES = [
  { year: "2022", title: "Nacimiento",  desc: "Meetups pequeños, primeros talleres y canal de comunidad." },
  { year: "2023", title: "Aceleración", desc: "Mentorías 1:1, capítulos temáticos y alianzas con comunidades amigas." },
  { year: "2024–25", title: "Expansión", desc: "Más ciudades, programas para niñez y mujeres, y empleabilidad." },
];

export default function ImpactTimeline() {
  return (
    <div className="mt-12">
      <div className="hidden md:grid grid-cols-3 gap-6 relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />

        {MILESTONES.map((m) => (
          <div key={m.year} className="relative text-center">
            <div className="mx-auto h-10 w-10 rounded-full bg-primary ring-4 ring-gray-200 shadow-md" />
            <div className="mt-4 rounded-2xl border border-gray-600 bg-gray-900/90 p-6 shadow-lg">
              <div className="text-xl font-bold text-primary">{m.year}</div>
              <div className="mt-1 text-sm font-semibold text-gray-200">{m.title}</div>
              <p className="mt-2 text-gray-300">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden space-y-6 relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-600" />
        {MILESTONES.map((m) => (
          <div key={m.year} className="relative pl-10">
            <div className="absolute left-1.5 top-2 h-6 w-6 rounded-full bg-primary ring-2 ring-gray-200" />
            <div className="rounded-xl border border-gray-600 bg-gray-900/90 p-4 shadow">
              <div className="text-sm font-bold text-primary">{m.year} · <span className="text-gray-200">{m.title}</span></div>
              <p className="mt-1 text-sm text-gray-300">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
