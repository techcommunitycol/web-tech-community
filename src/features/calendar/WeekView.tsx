// src/features/calendar/WeekView.tsx
import React, { useMemo } from "react";
import { EVENTS } from "./CalendarData";
import {
  WEEK_DAYS,
  getEventsForDay,
  eventColor,
  getStartOfWeek,
  isSameDay,
  type CalendarEvent,
  type EventType,
  type FormatoType,
} from "./CalendarComponentes";

interface WeekViewProps {
  currentDate: Date;
  today: Date;
  activeTypes: EventType[];
  activeOwners: string[];
  activeFormatos: FormatoType[];
  searchQuery: string;
  onSelectEvent: (event: CalendarEvent) => void;
}

const WeekView: React.FC<WeekViewProps> = ({
  currentDate,
  today,
  activeTypes,
  activeOwners,
  activeFormatos,
  searchQuery,
  onSelectEvent,
}) => {
  const weekDates = useMemo(() => {
    const start = getStartOfWeek(currentDate);
    const dates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      dates.push(
        new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
      );
    }
    return dates;
  }, [currentDate]);

  const query = searchQuery.trim().toLowerCase();

  return (
    <>
      <div className="grid grid-cols-7 text-center text-[11px] md:text-xs text-slate-400 mb-1 md:mb-2">
        {weekDates.map((date, idx) => (
          <div key={idx} className="py-2">
            <div>{WEEK_DAYS[date.getDay()]}</div>
            <div className="text-slate-300 text-[11px]">
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-px bg-slate-900/60 rounded-xl overflow-hidden">
        {weekDates.map((date, idx) => {
          const events = getEventsForDay(EVENTS, date).filter((e) => {
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
          });

          const isTodayFlag = isSameDay(date, today);

          return (
            <div
              key={idx}
              className="h-40 bg-slate-950 border border-slate-900/60 px-1.5 py-1.5 flex flex-col"
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
                {events.length === 0 && (
                  <span className="text-[10px] text-slate-500">
                    Sin eventos
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeekView;
