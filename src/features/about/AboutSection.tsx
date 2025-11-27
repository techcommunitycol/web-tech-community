import Section from "../../shared/components/Section";
import EventReel from "./EventReel";
import ImpactTimeline from "./ImpactTimeline";

const PILLARS = [
  "Educación abierta",
  "Mentorías 1:1",
  "Comunidad & networking",
  "Alianzas con impacto",
];

const STATS = [
  { kpi: "+3.5k", label: "miembros" },
  { kpi: "50+", label: "eventos" },
  { kpi: "15", label: "comunidades aliadas" },
];

export default function AboutSection() {
  return (
    <Section
      id="about"
      title="¿Qué es Tech Community?"
      subtitle="Impulsamos el crecimiento en tecnología con enfoque humano y oportunidades reales."
    >
      <div className="relative overflow-hidden rounded-3xl p-[1px] bg-gradient-to-br from-brand-300/40 via-brand-600/40 to-brand-800/40">
        <div className="rounded-[calc(theme(borderRadius.3xl)-1px)] bg-[#121a32] border border-white/10 p-6 md:p-10">
          <h3 className="text-2xl md:text-3xl font-semibold">Nuestra esencia</h3>
          <p className="mt-3 text-slate-300">
            Creamos espacios seguros para aprender, enseñar y conectar.
            Organizamos meetups, talleres y mentorías; articulamos alianzas
            para cerrar brechas de acceso al conocimiento y la tecnología.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {PILLARS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-600/25 blur-3xl" />
      </div>

      <div className="mt-20">
          <ImpactTimeline />
      </div>
      
      <div className="mt-10 mb-1 grid items-center gap-8 md:grid-cols-2">
        <div>
          <h4 className="text-xl font-semibold">Impacto medible</h4>
          <p className="mt-2 text-slate-300">
            Crecemos junto a otras comunidades y empresas para multiplicar el
            alcance y la empleabilidad en LATAM.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-[#0b1020]/40 p-4 text-center"
              >
                <div className="bg-gradient-to-r from-brand-400 to-brand-700 bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.kpi}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="#allies"
              className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-white/90 hover:border-brand-500/40"
            >
              Ver comunidades aliadas →
            </a>
          </div>
        </div>
        <EventReel />
      </div>
    </Section>
  );
}
