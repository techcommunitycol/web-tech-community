import { FiCode, FiTrendingUp, FiGlobe } from "react-icons/fi";

const MILESTONES = [
  { year: "2021", title: "Nacimiento",  desc: "Meetups pequeños, primeros talleres y canal de comunidad." },
  { year: "2022-2023", title: "Aceleración", desc: "Mentorías 1:1, capítulos temáticos y alianzas con comunidades amigas." },
  { year: "2024–25", title: "Expansión", desc: "Más ciudades, programas para niñez y mujeres, y empleabilidad." },
];

const ICONS = [FiCode, FiTrendingUp, FiGlobe];

export default function ImpactTimeline() {
  return (
    <div className="mt-12 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.62),rgba(17,17,17,0.72))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            Evolución
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Hitos que marcaron el crecimiento de la comunidad.
          </p>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300 md:inline-flex">
          Roadmap comunitario
        </div>
      </div>

      <div className="relative hidden grid-cols-3 gap-6 md:grid">
        <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-primary/20 via-primary/70 to-blue-400/30" />

        {MILESTONES.map((m, i) => {
          const Icon = ICONS[i] ?? FiCode;
          return (
            <div key={m.year} className="relative text-center">
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(54,151,156,0.22),rgba(10,73,165,0.18))] shadow-[0_0_28px_rgba(54,151,156,0.16)]">
                <Icon className="h-5 w-5 text-white" />
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                  {m.year}
                </div>
                <div className="mt-3 text-sm font-semibold text-gray-200">{m.title}</div>
                <p className="mt-2 text-sm text-gray-300">{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative space-y-6 md:hidden">
        <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-primary/40 via-primary/70 to-blue-400/40" />
        {MILESTONES.map((m, i) => {
          const Icon = ICONS[i] ?? FiCode;
          return (
            <div key={m.year} className="relative pl-10">
              <div className="absolute left-1.5 top-2 grid h-7 w-7 place-items-center rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(54,151,156,0.22),rgba(10,73,165,0.18))]">
                <Icon className="h-3.5 w-3.5 text-white" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_14px_32px_rgba(0,0,0,0.16)] backdrop-blur-sm">
                <div className="text-sm font-bold text-primary">{m.year} · <span className="text-gray-200">{m.title}</span></div>
                <p className="mt-1 text-sm text-gray-300">{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
