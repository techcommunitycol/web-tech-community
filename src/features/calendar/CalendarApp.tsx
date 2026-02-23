import { FiCalendar } from "react-icons/fi";
import Section from "../../shared/components/Section";
import CalendarPage from "./CalendarPage";

export default function CalendarApp() {
  return (
    <Section id="calendar" title="Conoce nuestros eventos">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="h-12 w-12 rounded-full grid place-items-center flex-shrink-0"
          style={{ background: "rgba(54,151,156,0.12)" }}
          aria-hidden
        >
          <FiCalendar className="h-6 w-6 text-primary" />
        </div>
        <p className="text-sm text-gray-300">
          Agenda unificada de eventos de la comunidad. Filtra por tipo, organizador o formato.
        </p>
      </div>
      <CalendarPage />
    </Section>
  );
}
