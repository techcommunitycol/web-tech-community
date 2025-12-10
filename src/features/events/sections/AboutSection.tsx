import Section from "../../../shared/components/Section";
import EventReel from "../ui/EventReel";
import ImpactTimeline from "../../about/ImpactTimeline";
import { EVENTS } from "../data/events";

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
      title="Misión y Visión"
      subtitle="Nuestra misión y visión para transformar el talento y la inclusión tecnológica en Colombia y LATAM."
    >
      <div className="relative">
        <div className="bg-gray-900 rounded-2xl border border-gray-600 p-6 md:p-8 relative overflow-hidden">
          <div
            className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-primary-rgba-12, rgba(54,151,156,0.06)), transparent 40%)",
            }}
          />

          <div className="grid gap-6 md:grid-cols-2 items-start">
            <article className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(90,96,99,0.06)] text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 21a7 7 0 100-14 7 7 0 000 14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">Misión</h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Somos una comunidad de tecnología que trabaja por transformar a Colombia, democratizando el acceso a la educación y la innovación. Construimos un ecosistema que conecta comunidades, estudiantes, empresas y poblaciones vulnerables como niños, jóvenes, comunidades indígenas y rurales, creando espacios de aprendizaje a través de programas de formación, eventos y colaboraciones. Con nuestro poder colectivo impulsamos el talento del futuro del país, orquestando un ecosistema de educación, innovación y comunidad con impacto social.
              </p>
            </article>

            <article className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(90,96,99,0.06)] text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">Visión</h3>
              </div>

              <p className="text-gray-300 leading-relaxed">
                En la próxima década, seremos el ecosistema de innovación y talento tecnológico referente en América Latina, reconocido por convertir a Colombia en un modelo global de educación, tecnología e inclusión social. Nuestro propósito es consolidar un ecosistema sostenible donde confluyen comunidades, empresas, instituciones y gobiernos, creando soluciones de impacto que transforman realidades, reducen brechas sociales y potencian el talento del país democratizando la educación, la investigación de vanguardia y las oportunidades económicas.
              </p>
            </article>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {PILLARS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full bg-[rgba(90,96,99,0.10)] px-3 py-1 text-xs text-gray-200"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <ImpactTimeline />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
          <div>
            <h4 className="text-xl font-semibold text-gray-200">Impacto medible</h4>
            <p className="mt-2 text-gray-300">
              Crecemos junto a otras comunidades y empresas para multiplicar el alcance y la empleabilidad en LATAM.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-lg bg-gray-900 p-4 text-center border border-gray-600">
                  <div className="text-3xl font-extrabold text-primary">{s.kpi}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-gray-200">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="#allies"
                className="inline-flex items-center rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-[rgba(220,225,228,0.02)]"
              >
                Ver comunidades aliadas →
              </a>
            </div>
          </div>

          <EventReel events={EVENTS} />
        </div>
      </div>
    </Section>
  );
}