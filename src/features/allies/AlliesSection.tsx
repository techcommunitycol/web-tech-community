import Section from "../../shared/components/Section";
import { ALLIES } from "./allies.data";

export default function AlliesSection() {
  return (
    <Section
      id="allies"
      title="Comunidades que hemos apoyado"
      subtitle="Crecemos más cuando colaboramos."
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ALLIES.map((a) => (
          <a
            key={a.name}
            href={a.url}
            target="_blank"
            className="group relative rounded-3xl border border-white/10 bg-[#121a32]/80 backdrop-blur p-6 overflow-hidden hover:border-brand-600/40 transition-all"
          >
            <div className="flex flex-col items-center text-center gap-3">
              <div className="relative">
                <div className="size-24 md:size-28 rounded-full ring-2 ring-white/15 shadow-lg overflow-hidden animate-float">
                  <img
                    src={a.logo}
                    alt={a.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none absolute -z-10 inset-0 rounded-full bg-brand-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-sm font-semibold">{a.name}</h3>
            </div>

            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform">
              <div className="m-3 rounded-2xl border border-white/10 bg-black/45 backdrop-blur px-4 py-3 text-left">
                <p className="text-xs text-slate-200">{a.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
