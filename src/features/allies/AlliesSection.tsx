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
          style={{ background: "radial-gradient(circle, var(--color-primary-rgba-12, rgba(54,151,156,0.06)), transparent 45%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-14 -right-14 h-36 w-36 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(90,96,99,0.06), transparent 45%)" }}
        />

        <div className="bg-gray-900 rounded-2xl border border-gray-600 p-6 md:p-8">
          <p className="mb-6 text-sm text-gray-300 max-w-3xl">
            Trabajamos con comunidades que comparten valores: educación abierta, mentoría y colaboración para generar oportunidades.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {firstRow.map((a) => {
              const logo = (a as any).logo as string | undefined;
              const name = a.name ?? "";
              const href = (a as any).link ?? (a as any).website ?? "#";
              const Icon = pickIcon(name);

              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3 rounded-xl border border-primary bg-[rgba(255,255,255,0.02)] backdrop-blur-sm p-4 text-center transition transform hover:scale-[1.02] focus:outline-none"
                >
                  <div
                    className="h-14 w-14 flex items-center justify-center rounded-full shrink-0"
                    style={{ background: "rgba(90,96,99,0.06)" }}
                    aria-hidden
                  >
                    {logo ? (
                      <img src={logo} alt={name} className="h-10 w-10 object-contain" />
                    ) : (
                      <Icon className="h-8 w-8" style={{ color: "var(--color-primary)" }} />
                    )}
                  </div>

                  <span className="text-sm font-medium text-gray-200">{name}</span>
                </a>
              );
            })}
          </div>

          {secondRow.length > 0 && (
            <div className="mt-6 md:mt-8 md:col-span-4 flex justify-center">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-3xl w-full">
                {secondRow.map((a) => {
                  const logo = (a as any).logo as string | undefined;
                  const name = a.name ?? "";
                  const href = (a as any).link ?? (a as any).website ?? "#";
                  const Icon = pickIcon(name);

                  return (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center gap-3 rounded-xl border border-primary bg-[rgba(255,255,255,0.02)] backdrop-blur-sm p-4 text-center transition transform hover:scale-[1.02] focus:outline-none"
                    >
                      <div
                        className="h-14 w-14 flex items-center justify-center rounded-full shrink-0"
                        style={{ background: "rgba(90,96,99,0.06)" }}
                        aria-hidden
                      >
                        {logo ? (
                          <img src={logo} alt={name} className="h-10 w-10 object-contain" />
                        ) : (
                          <Icon className="h-8 w-8" style={{ color: "var(--color-primary)" }} />
                        )}
                      </div>

                      <span className="text-sm font-medium text-gray-200">{name}</span>
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
