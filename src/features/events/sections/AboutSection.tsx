import Section from "../../../shared/components/Section";
import EventReel from "../ui/EventReel";
import ImpactTimeline from "../../about/ImpactTimeline";
import { EVENTS } from "../data/events";
import { FiTarget, FiUsers, FiShare2, FiAward } from "react-icons/fi";

const PILLARS = [
  { label: "Educación abierta", icon: FiTarget },
  { label: "Mentorías 1:1", icon: FiUsers },
  { label: "Comunidad & networking", icon: FiShare2 },
  { label: "Alianzas con impacto", icon: FiAward },
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
                  <FiTarget className="h-5 w-5" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">
                  Misión
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Somos una comunidad de tecnología que trabaja por transformar a
                Colombia, democratizando el acceso a la educación y la
                innovación. Construimos un ecosistema que conecta comunidades,
                estudiantes, empresas y poblaciones vulnerables como niños,
                jóvenes, comunidades indígenas y rurales, creando espacios de
                aprendizaje a través de programas de formación, eventos y
                colaboraciones. Con nuestro poder colectivo impulsamos el
                talento del futuro del país, orquestando un ecosistema de
                educación, innovación y comunidad con impacto social.
              </p>
            </article>

            <article className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(90,96,99,0.06)] text-primary">
                  <FiAward className="h-5 w-5" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-200">
                  Visión
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                En la próxima década, seremos el ecosistema de innovación y
                talento tecnológico referente en América Latina, reconocido por
                convertir a Colombia en un modelo global de educación,
                tecnología e inclusión social. Nuestro propósito es consolidar
                un ecosistema sostenible donde confluyen comunidades, empresas,
                instituciones y gobiernos, creando soluciones de impacto que
                transforman realidades, reducen brechas sociales, potencien el
                talento del país democratizando la educación, la investigación
                de vanguardia y las oportunidades económicas.
              </p>
            </article>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full bg-[rgba(90,96,99,0.06)] px-3 py-2 text-xs text-gray-200 shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{p.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <ImpactTimeline />
        </div>

        <div className="mt-8 sm:mt-10">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-200">
              Impacto medible
            </h4>
            <p className="mt-2 text-sm sm:text-base text-gray-300">
              Crecemos junto a otras comunidades y empresas para multiplicar el
              alcance y la empleabilidad en LATAM.
            </p>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg bg-gray-900 p-3 sm:p-4 text-center border border-gray-600"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary">
                    {s.kpi}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-gray-200">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <EventReel events={EVENTS} />
        </div>
      </div>
    </Section>
  );
}
