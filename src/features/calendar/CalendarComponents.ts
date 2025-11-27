export type EventType = "language-exchange" | "tech" | "others";
export const FORMATOS = ["Presencial", "Virtual", "Híbrido"] as const;
export type FormatoType = typeof FORMATOS[number];

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // "YYYY-MM-DD"
  location?: string;
  time?: string;
  type: EventType;
  owner: string;
  format: FormatoType;
  description?: string;
  url?: string;
}

export const WEEK_DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export function getEventsForDay(events: CalendarEvent[], date: Date) {
  const iso = date.toISOString().slice(0, 10);
  return events.filter((e) => e.date === iso);
}

export function eventColor(type: EventType) {
  switch (type) {
    case "tech":
      return "bg-emerald-600 hover:bg-emerald-500";
    case "language-exchange":
      return "bg-rose-600 hover:bg-rose-500";
    case "others":
      return "bg-indigo-600 hover:bg-indigo-500";
    default:
      return "bg-sky-600 hover:bg-sky-500";
  }
}

export function getStartOfWeek(date: Date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay(); // 0 = Sunday
  d.setDate(d.getDate() - day);
  return d;
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function getUniqueOwners(events: CalendarEvent[]): string[] {
  const set = new Set<string>();
  for (const e of events) {
    if (e.owner) set.add(e.owner);
  }
  return Array.from(set).sort();
}