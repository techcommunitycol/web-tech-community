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

export const WEEK_DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
export const WEEK_DAYS_FULL = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export function getEventsForDay(events: CalendarEvent[], date: Date) {
  const iso = date.toISOString().slice(0, 10);
  return events.filter((e) => e.date === iso);
}

/** Colores del manual de marca (primary #36979C, brand palette) */
export function eventColor(type: EventType) {
  switch (type) {
    case "tech":
      return "bg-primary hover:bg-primary/90";
    case "language-exchange":
      return "bg-brand-400 hover:bg-brand-300";
    case "others":
      return "bg-brand-600 hover:bg-brand-500";
    default:
      return "bg-primary hover:bg-primary/90";
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