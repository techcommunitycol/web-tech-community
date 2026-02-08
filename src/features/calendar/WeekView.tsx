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
} from "./CalendarComponents";

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
    <div className="w-full min-w-0 overflow-hidden">
      <div
        className="grid text-center text-[10px] sm:text-[11px] md:text-xs text-gray-400 mb-1 md:mb-2 min-w-0"
        style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
      >
        {weekDates.map((date, idx) => (
          <div key={idx} className="py-2">
            <div>{WEEK_DAYS[date.getDay()]}</div>
            <div className="text-gray-300 text-[11px]">
              {date.getDate()}
            </div>
          </div>
        ))}
      </div>

      <div
        className="grid gap-px bg-gray-800/60 rounded-xl overflow-hidden min-w-0"
        style={{ gridTemplateColumns: "repeat(7, minmax(0, 1fr))" }}
      >
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
              className="min-h-[5rem] md:min-h-[6.5rem] bg-gray-900 border border-gray-800/60 px-1.5 py-1.5 flex flex-col min-w-0"
            >
              <div className="flex items-center justify-between mb-1 flex-shrink-0">
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
              <div className="space-y-0.5 overflow-y-auto flex-1 min-h-0">
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
                {events.length === 0 && (
                  <span className="text-[9px] sm:text-[10px] text-gray-500">
                    Sin eventos
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekView;
