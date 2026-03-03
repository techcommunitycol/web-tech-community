import type { CalendarEvent } from "./CalendarComponents";

const BASE_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Intercambio de idiomas",
    date: "2026-02-23",
    location: "On Going",
    time: "5:30 PM",
    type: "language-exchange",
    owner: "Tech Community",
    format: "Presencial",
    description: "Intercambio de idiomas para practicar y conocer nuevas culturas.",
    url: "",
  },
  {
    id: "2",
    title: "Evento virtual con Sebastián (GDE)",
    date: "2026-02-25",
    location: "Online",
    time: "7:00 PM",
    type: "tech",
    owner: "Tech Community",
    format: "Virtual",
    description: "Evento virtual con Sebastián, Google Developer Expert.",
    url: "",
  },
  {
    id: "3",
    title: "Evento presencial GDG: Principios fundamentales para trabajar con coding assistant",
    date: "2026-02-21",
    location: "GDG Medellín",
    time: "10:00 AM",
    type: "tech",
    owner: "GDG Medellín",
    format: "Presencial",
    description: "Principios fundamentales para trabajar con coding assistant.",
    url: "",
  },
    {
    id: "4",
    title: "IWD 2026",
    date: "2026-03-06",
    location: "GDG Medellín",
    time: "08:00 AM",
    type: "tech",
    owner: "WTM, Pioneras Dev",
    format: "Presencial",
    description: "Evento presencial para celebrar el Día Internacional de la Mujer en Tecnología.",
    url: "",
  },
];

function getLocalEvents(): CalendarEvent[] {
  try {
    const local = localStorage.getItem("calendarEvents");
    if (!local) return [];
    const parsed = JSON.parse(local);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getCalendarEvents(): CalendarEvent[] {
  return [...BASE_EVENTS, ...getLocalEvents()];
}
