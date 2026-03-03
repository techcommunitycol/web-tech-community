import Section from "../../shared/components/Section";
import TeamCarousel from "./TeamCarousel";

export default function TeamSection() {
  return (
    <Section
      id="team"
      title="Nuestro equipo"
      subtitle="Personas creando experiencias que transforman vidas."
    >
      <div className="relative">
        <div className="pointer-events-none absolute -top-10 left-0 h-36 w-36 rounded-full bg-[rgba(54,151,156,0.12)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 right-0 h-36 w-36 rounded-full bg-[rgba(10,73,165,0.1)] blur-3xl" />
        <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Talento humano
        </div>
        <TeamCarousel />
      </div>
    </Section>
  );
}
