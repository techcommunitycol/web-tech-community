import Section from "../../shared/components/Section";
import { ALLIES } from "./allies.data";

export default function AlliesSection() {
  const firstRow = ALLIES.slice(0, 4);
  const secondRow = ALLIES.slice(4);

  return (
    <Section id="allies" title="Comunidades aliadas" subtitle="Colaboramos con otras comunidades y organizaciones para amplificar impacto.">
      <div className="relative">
        <div className="bg-gray-900 rounded-2xl border border-gray-600 p-6 md:p-8">
          <p className="mb-6 text-sm text-gray-300 max-w-3xl">
            Trabajamos con comunidades que comparten valores: educación abierta, mentoría y colaboración para generar oportunidades.
          </p>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {firstRow.map((a) => {
              const logo = (a as any).logo as string | undefined;
              const name = a.name ?? "";
              const href = (a as any).link ?? (a as any).website ?? "#";

              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-3 rounded-xl border border-primary bg-[rgba(255,255,255,0.02)] backdrop-blur-sm p-4 text-center transition transform hover:scale-[1.02]"
                >
                  <div className="h-14 w-14 flex items-center justify-center rounded-full shrink-0" style={{ background: "rgba(90,96,99,0.06)" }} aria-hidden>
                    {logo ? (
                      <img src={logo} alt={name} className="h-10 w-10 object-contain" />
                    ) : (
                      <span className="text-lg text-primary font-semibold">{name.charAt(0)}</span>
                    )}
                  </div>

                  <span className="text-sm font-medium text-gray-200">{name}</span>
                </a>
              );
            })}
          </div>

          {secondRow.length > 0 && (
            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 max-w-3xl w-full">
                {secondRow.map((a) => {
                  const logo = (a as any).logo as string | undefined;
                  const name = a.name ?? "";
                  const href = (a as any).link ?? (a as any).website ?? "#";

                  return (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center gap-3 rounded-xl border border-primary bg-[rgba(255,255,255,0.02)] backdrop-blur-sm p-4 text-center transition transform hover:scale-[1.02]"
                    >
                      <div className="h-14 w-14 flex items-center justify-center rounded-full shrink-0" style={{ background: "rgba(90,96,99,0.06)" }} aria-hidden>
                        {logo ? <img src={logo} alt={name} className="h-10 w-10 object-contain" /> : <span className="text-lg text-primary font-semibold">{name.charAt(0)}</span>}
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
