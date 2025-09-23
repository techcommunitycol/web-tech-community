import Section from "../../shared/components/Section";
import TeamCarousel from "./TeamCarousel";

export default function TeamSection() {
  return (
    <Section
      id="team"
      title="Nuestro equipo"
      subtitle="Personas creando experiencias que transforman vidas."
    >
      <TeamCarousel />
    </Section>
  );
}
