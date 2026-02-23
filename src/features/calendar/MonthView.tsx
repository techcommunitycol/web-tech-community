// src/features/calendar/MonthView.tsx
import React, { useMemo } from "react";
import { EVENTS } from "./CalendarData";
import {
  WEEK_DAYS,
  getEventsForDay,
  eventColor,
  isSameDay,
  type CalendarEvent,
  type EventType,
  type FormatoType,
} from "./CalendarComponents";

interface MonthViewProps {
  currentDate: Date;
  today: Date;
  activeTypes: EventType[];
  activeOwners: string[];
  activeFormatos: FormatoType[];
  searchQuery: string;
  onSelectEvent: (event: CalendarEvent) => void;
}

const MonthView: React.FC<MonthViewProps> = ({
  currentDate,
  today,
  activeTypes,
  activeOwners,
  activeFormatos,
  searchQuery,
  onSelectEvent,
}) => {
  const { days } = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startOffset = firstOfMonth.getDay(); // 0 = Sunday

    const result: (Date | null)[] = [];
    for (let i = 0; i < startOffset; i++) result.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      result.push(new Date(year, month, d));
    }
    return { days: result };
  }, [currentDate]);

  const query = searchQuery.trim().toLowerCase();

  return (
    <div className="w-full min-w-0 overflow-hidden">
      {/* Header días de la semana - abreviados para mobile */}
      <div
        className="grid text-center text-[10px] sm:text-[11px] md:text-xs text-gray-400 mb-1 md:mb-2 min-w-0"
        style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
      >
        {WEEK_DAYS.map((d) => (
          <div key={d} className="py-2 truncate" title={d}>
            {d}
          </div>
        ))}
      </div>

      {/* Celdas del mes - minmax(0,1fr) evita que columnas expandan y provoquen scroll horizontal */}
      <div
        className="grid gap-px bg-gray-800/60 rounded-xl overflow-hidden min-w-0"
        style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
      >
        {days.map((date, idx) => {
          if (!date) {
            return (
              <div key={idx} className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6.5rem] bg-gray-900 min-w-0" />
            );
          }

          const events = getEventsForDay(EVENTS, date).filter((e) => {
            // 1) tipo
            if (!activeTypes.includes(e.type)) return false;

            // 2) owner
            if (activeOwners.length && !activeOwners.includes(e.owner)) {
              return false;
            }

            // 3) formato
            if (
              activeFormatos.length &&
              !activeFormatos.includes(e.format)
            ) {
              return false;
            }

            // 4) búsqueda
            if (!query) return true;

            const haystack = `${e.title} ${e.description ?? ""} ${
              e.location ?? ""
            } ${e.owner} ${e.format}`.toLowerCase();

            return haystack.includes(query);
          });

          const isTodayFlag = isSameDay(date, today);

          return (
            <div
              key={idx}
              className="min-h-[4rem] sm:min-h-[5rem] md:min-h-[6.5rem] bg-gray-900 border border-gray-800/60 px-1 py-1.5 flex flex-col min-w-0"
            >
              <div className="flex items-center justify-between mb-0.5 flex-shrink-0">
                <span
                  className={`text-[10px] sm:text-[11px] text-gray-300 ${
                    isTodayFlag
                      ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white"
                      : ""
                  }`}
                >
                  {date.getDate()}
                </span>
              </div>

              <div className="space-y-0.5 overflow-y-auto flex-1 min-h-0 no-scrollbar">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => onSelectEvent(event)}
                    className={`group flex w-full min-w-0 items-center rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 text-[9px] sm:text-[10px] text-white overflow-hidden ${eventColor(
                      event.type
                    )}`}
                  >
                    <span className="mr-1 inline-block h-1 w-1 rounded-full bg-white/80 flex-shrink-0" />
                    <span className="truncate min-w-0">{event.title}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthView;
