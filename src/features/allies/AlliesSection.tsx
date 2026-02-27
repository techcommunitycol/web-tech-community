import Section from "../../shared/components/Section";
import { ALLIES } from "./allies.data";
import { FiGlobe, FiUsers, FiStar, FiMap } from "react-icons/fi";
import { FaHandshake } from "react-icons/fa";

const ICON_MAP: Record<string, any> = {
  gdg: FiGlobe,
  guardianes: FiStar,
  wtm: FiUsers,
  pioneras: FaHandshake,
  idiomas: FiMap,
};

function pickIcon(name: string) {
  const key = name.toLowerCase();
  if (key.includes("gdg")) return ICON_MAP.gdg;
  if (key.includes("guardian")) return ICON_MAP.guardianes;
  if (key.includes("wtm")) return ICON_MAP.wtm;
  if (key.includes("pioner")) return ICON_MAP.pioneras;
  if (key.includes("idioma")) return ICON_MAP.idiomas;
  return FiGlobe;
}

export default function AlliesSection() {
  const firstRow = ALLIES.slice(0, 4);
  const secondRow = ALLIES.slice(4);

  return (
    <Section
      id="allies"
      title="Comunidades aliadas"
      subtitle="Colaboramos con otras comunidades y organizaciones para amplificar impacto."
    >
      <div className="relative">
        <div
          className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(54,151,156,0.14), transparent 45%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-14 -right-14 h-36 w-36 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(10,73,165,0.12), transparent 45%)" }}
        />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(17,17,17,0.92))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.26)] md:p-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />

          <div className="relative z-10 mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Red colaborativa
          </div>

          <p className="relative z-10 mb-6 max-w-3xl text-sm text-gray-300">
            Trabajamos con comunidades que comparten valores: educación abierta, mentoría y colaboración para generar oportunidades.
          </p>

          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {firstRow.map((a) => {
              const logo = (a as any).logo as string | undefined;
              const name = a.name ?? "";
              const href = (a as any).link ?? (a as any).website ?? (a as any).url ?? "#";
              const Icon = pickIcon(name);
              const desc = (a as any).desc as string | undefined;

              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_60px_rgba(54,151,156,0.1)] focus:outline-none"
                >
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
                    aria-hidden
                  >
                    {logo ? (
                      <img src={logo} alt={name} className="h-11 w-11 object-contain transition duration-300 group-hover:scale-105" />
                    ) : (
                      <Icon className="h-8 w-8" style={{ color: "var(--color-primary)" }} />
                    )}
                  </div>

                  <span className="text-sm font-medium text-gray-200">{name}</span>
                  {desc ? (
                    <span className="line-clamp-3 text-xs leading-relaxed text-gray-400">{desc}</span>
                  ) : null}
                </a>
              );
            })}
          </div>

          {secondRow.length > 0 && (
            <div className="relative z-10 mt-6 flex justify-center md:mt-8 md:col-span-4">
              <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
                {secondRow.map((a) => {
                  const logo = (a as any).logo as string | undefined;
                  const name = a.name ?? "";
                  const href = (a as any).link ?? (a as any).website ?? (a as any).url ?? "#";
                  const Icon = pickIcon(name);
                  const desc = (a as any).desc as string | undefined;

                  return (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center shadow-[0_14px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_60px_rgba(54,151,156,0.1)] focus:outline-none"
                    >
                      <div
                        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]"
                        aria-hidden
                      >
                        {logo ? (
                          <img src={logo} alt={name} className="h-11 w-11 object-contain transition duration-300 group-hover:scale-105" />
                        ) : (
                          <Icon className="h-8 w-8" style={{ color: "var(--color-primary)" }} />
                        )}
                      </div>

                      <span className="text-sm font-medium text-gray-200">{name}</span>
                      {desc ? (
                        <span className="line-clamp-3 text-xs leading-relaxed text-gray-400">{desc}</span>
                      ) : null}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
