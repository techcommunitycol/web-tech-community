import Section from "../../shared/components/Section";

const ITEMS = [
  { icon: "🧑‍💻", title: "Eventos y talleres", desc: "Charlas técnicas y workshops para aprender haciendo." },
  { icon: "🤝", title: "Mentorías y paneles", desc: "Conecta con referentes de la industria." },
  { icon: "🌎", title: "Alianzas y comunidad", desc: "Colaboramos con más comunidades para ampliar el impacto." },
];

export default function WhatWeDoSection() {
  return (
    <Section
      id="what-we-do"
      title="¿Qué hacemos?"
      subtitle="Iniciativas concretas y medibles para activar el ecosistema tech."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {ITEMS.map((it) => (
          <div
            key={it.title}
            className="relative group bg-[#121a32] rounded-2xl border border-white/10 p-6 md:p-8 overflow-hidden hover:scale-[1.02] hover:border-indigo-500/40 transition-all"
          >
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
            <div className="text-4xl mb-4">{it.icon}</div>
            <h3 className="text-lg font-semibold text-white">{it.title}</h3>
            <p className="mt-2 text-slate-300 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
