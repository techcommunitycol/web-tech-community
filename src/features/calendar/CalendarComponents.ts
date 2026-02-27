export type EventType = "language-exchange" | "tech" | "others";
export const FORMATOS = ["Presencial", "Virtual", "Híbrido"] as const;
export type FormatoType = typeof FORMATOS[number];

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  location?: string;
  time?: string;
  type: EventType;
  owner: string;
  format: FormatoType;
  description?: string;
  url?: string;
}

export const WEEK_DAYS = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

export function getEventsForDay(events: CalendarEvent[], date: Date) {
  const iso = date.toISOString().slice(0, 10);
  return events.filter((e) => e.date === iso);
}

export function eventColor(type: EventType) {
  switch (type) {
    case "tech":
      return "bg-gradient-to-r from-[rgba(54,151,156,0.95)] via-cyan-600 to-emerald-500 hover:from-[rgba(54,151,156,1)] hover:via-cyan-500 hover:to-emerald-400";
    case "language-exchange":
      return "bg-gradient-to-r from-slate-700 via-[rgba(54,151,156,0.85)] to-cyan-600 hover:from-slate-600 hover:via-[rgba(54,151,156,0.95)] hover:to-cyan-500";
    case "others":
      return "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 hover:from-slate-600 hover:to-slate-700";
    default:
      return "bg-gradient-to-r from-[rgba(54,151,156,0.95)] to-cyan-600 hover:from-[rgba(54,151,156,1)] hover:to-cyan-500";
  }
}

export function getStartOfWeek(date: Date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const day = d.getDay();
  d.setDate(d.getDate() - day);
  return d;
}

export function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function getUniqueOwners(events: CalendarEvent[]): string[] {
  const set = new Set<string>();
  for (const e of events) {
    if (e.owner) set.add(e.owner);
  }
  return Array.from(set).sort();
}
