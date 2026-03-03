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
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(17,17,17,0.92))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.3)] md:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
          <div
            className="pointer-events-none absolute -top-10 -right-8 h-40 w-40 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(54,151,156,0.18), transparent 42%)",
            }}
          />
          <div className="pointer-events-none absolute -bottom-12 left-1/3 h-44 w-44 rounded-full bg-[rgba(10,73,165,0.12)] blur-3xl" />

          <div className="relative z-10 mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Ecosistema con propósito
              </p>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Una visión compartida para educación, comunidad, innovación y oportunidades reales.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(54,151,156,0.55)]" />
              Impacto en Colombia y LATAM
            </div>
          </div>

          <div className="grid items-start gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-primary/20 hover:bg-white/[0.04] md:p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70" />
              <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Misión
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary shadow-[0_0_24px_rgba(54,151,156,0.12)]">
                  <FiTarget className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-200 md:text-3xl">
                  Misión
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
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

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-primary/20 hover:bg-white/[0.04] md:p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-70" />
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                Visión
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-blue-300 shadow-[0_0_24px_rgba(96,165,250,0.12)]">
                  <FiAward className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-200 md:text-3xl">
                  Visión
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-200 shadow-sm backdrop-blur-sm"
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
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.6),rgba(17,17,17,0.7))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:p-6">
            <div className="mb-1 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Métricas
            </div>
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
                  className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-4 text-center shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-primary drop-shadow-[0_0_12px_rgba(54,151,156,0.2)]">
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
