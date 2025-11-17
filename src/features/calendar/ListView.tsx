// src/features/calendar/ListView.tsx
import React, { useMemo } from "react";
import { EVENTS } from "./CalendarData";
import {
  eventColor,
  type CalendarEvent,
  type EventType,
  type FormatoType,
} from "./CalendarComponentes";

interface ListViewProps {
  today: Date;
  activeTypes: EventType[];
  activeOwners: string[];
  activeFormatos: FormatoType[];
  searchQuery: string;
  onSelectEvent: (event: CalendarEvent) => void;
}

const ListView: React.FC<ListViewProps> = ({
  today,
  activeTypes,
  activeOwners,
  activeFormatos,
  searchQuery,
  onSelectEvent,
}) => {
  const upcomingEvents = useMemo(() => {
    const todayMidnight = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    ).getTime();

    const query = searchQuery.trim().toLowerCase();

    return [...EVENTS]
      .filter((e) => {
        const d = new Date(e.date);
        const dMid = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        if (dMid.getTime() < todayMidnight) return false;

        if (!activeTypes.includes(e.type)) return false;
        if (activeOwners.length && !activeOwners.includes(e.owner)) {
          return false;
        }
        if (
          activeFormatos.length &&
          !activeFormatos.includes(e.format)
        ) {
          return false;
        }

        if (!query) return true;

        const haystack = `${e.title} ${e.description ?? ""} ${
          e.location ?? ""
        } ${e.owner} ${e.format}`.toLowerCase();

        return haystack.includes(query);
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [today, activeTypes, activeOwners, activeFormatos, searchQuery]);

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase">
            Próximos eventos
          </p>
          <p className="text-sm md:text-base">
            Todos los eventos futuros ordenados cronológicamente
          </p>
        </div>
      </div>

      {upcomingEvents.length === 0 ? (
        <p className="text-sm text-slate-400">
          No hay eventos futuros registrados.
        </p>
      ) : (
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <button
              key={event.id}
              onClick={() => onSelectEvent(event)}
              className="w-full text-left rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 hover:border-sky-600 transition"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold">{event.title}</p>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full text-slate-50 ${eventColor(
                    event.type
                  )}`}
                >
                  {event.type}
                </span>
              </div>

              <div className="mt-1 text-[11px] text-slate-400 flex flex-wrap gap-3">
                <span className="flex items-center gap-1">
                  <span>📅</span>
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </span>
                {event.time && (
                  <span className="flex items-center gap-1">
                    <span>⏰</span>
                    <span>{event.time}</span>
                  </span>
                )}
                {event.location && (
                  <span className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{event.location}</span>
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <span>🎯</span>
                  <span>{event.format}</span>
                </span>
              </div>

              {event.description && (
                <p className="mt-2 text-xs text-slate-300">
                  {event.description}
                </p>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListView;
