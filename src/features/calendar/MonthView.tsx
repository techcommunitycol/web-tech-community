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
} from "./CalendarComponentes";

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
    <>
      {/* Header días de la semana */}
      <div className="grid grid-cols-7 text-center text-[11px] md:text-xs text-slate-400 mb-1 md:mb-2">
        {WEEK_DAYS.map((d) => (
          <div key={d} className="py-2">
            {d}
          </div>
        ))}
      </div>

      {/* Celdas del mes */}
      <div className="grid grid-cols-7 gap-px bg-slate-900/60 rounded-xl overflow-hidden">
        {days.map((date, idx) => {
          if (!date) {
            return (
              <div key={idx} className="h-24 md:h-32 bg-slate-950" />
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
              className="h-24 md:h-32 bg-slate-950 border border-slate-900/60 px-1.5 py-1.5 flex flex-col"
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className={`text-[11px] text-slate-300 ${
                    isTodayFlag
                      ? "inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[11px] font-semibold"
                      : ""
                  }`}
                >
                  {date.getDate()}
                </span>
              </div>

              <div className="space-y-1 overflow-y-auto">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => onSelectEvent(event)}
                    className={`group flex w-full items-center rounded-full px-2 py-1 text-[10px] text-slate-50 ${eventColor(
                      event.type
                    )}`}
                  >
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-slate-100" />
                    <span className="truncate">{event.title}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MonthView;
