import React, { useState } from "react";
import {
  getUniqueOwners,
  type CalendarEvent,
  type EventType,
  type FormatoType,
} from "./CalendarComponents";
import { EVENTS } from "./CalendarData";
import MonthView from "./MonthView";
import WeekView from "./WeekView";
import ListView from "./ListView";
import CalendarSidebar from "./CalendarSidebar";
import EventModal from "./CalendarEventModal";

type ViewMode = "month" | "week" | "list";

const CalendarPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }))
  );
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [activeTypes, setActiveTypes] = useState<EventType[]>([
    "language-exchange",
    "tech",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const allOwners = getUniqueOwners(EVENTS);
  const [activeOwners, setActiveOwners] = useState<string[]>(allOwners);
  const [activeFormatos, setActiveFormatos] = useState<FormatoType[]>([
    ...new Set(EVENTS.map((e) => e.format as FormatoType)),
  ]);

  const today = new Date();
  const monthLabel = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToToday = () => {
    const t = new Date();
    setCurrentDate(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
  };

  const changePeriod = (offset: number) => {
    setCurrentDate((prev) => {
      const year = prev.getFullYear();
      const month = prev.getMonth();
      const day = prev.getDate();

      if (viewMode === "month" || viewMode === "list") {
        return new Date(year, month + offset, 1);
      }

      if (viewMode === "week") {
        return new Date(year, month, day + offset * 7);
      }

      return prev;
    });
  };

  return (
    <div className="relative min-h-screen text-slate-50 flex bg-[#0b1020] overflow-hidden border-radius-lg">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[#0b1020]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(54,151,156,0.18)] via-[rgba(54,151,156,0.08)] to-transparent" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.22)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.18)] blur-3xl" />

      <div className="relative z-10 w-full flex">
        <CalendarSidebar
          activeTypes={activeTypes}
          setActiveTypes={setActiveTypes}
          allOwners={allOwners}
          activeOwners={activeOwners}
          setActiveOwners={setActiveOwners}
          activeFormatos={activeFormatos}
          setActiveFormatos={setActiveFormatos}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 flex items-center justify-between border-b border-white/10 px-4 md:px-6 bg-transparent">
            <div className="flex items-center gap-2">
              <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10">
                ☰
              </button>
              <div>
                <h1 className="text-sm md:text-base font-semibold">Calendario</h1>
                <p className="text-xs text-slate-400">
                  Descubre nuestros eventos y explora cada uno de ellos.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-100 hover:bg-white/10"
              >
                Búsqueda
              </button>

              {isSearchOpen && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar eventos..."
                  className="hidden sm:block rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-[rgba(54,151,156,0.9)]"
                />
              )}
            </div>
          </header>

          <div className="border-b border-white/10 px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-3 bg-transparent">
            <div className="flex items-center gap-2">
              <button
                onClick={() => changePeriod(-1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 text-slate-200"
              >
                ‹
              </button>
              <button
                onClick={() => changePeriod(1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10 text-slate-200"
              >
                ›
              </button>
              <span className="ml-1 text-sm md:text-base font-semibold">
                {monthLabel}
              </span>
              <button
                onClick={goToToday}
                className="ml-3 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100 hover:bg-white/10"
              >
                Hoy
              </button>
            </div>

            <div className="flex items-center gap-1 text-xs">
              <button
                onClick={() => setViewMode("month")}
                className={`rounded-md px-3 py-1 ${
                  viewMode === "month"
                    ? "bg-white/10 text-slate-100 border border-white/10"
                    : "text-slate-400 hover:bg-white/5"
                }`}
              >
                Mes
              </button>
              <button
                onClick={() => setViewMode("week")}
                className={`rounded-md px-3 py-1 ${
                  viewMode === "week"
                    ? "bg-white/10 text-slate-100 border border-white/10"
                    : "text-slate-400 hover:bg-white/5"
                }`}
              >
                Semana
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-md px-3 py-1 ${
                  viewMode === "list"
                    ? "bg-white/10 text-slate-100 border border-white/10"
                    : "text-slate-400 hover:bg-white/5"
                }`}
              >
                Todos
              </button>
            </div>
          </div>

          <main className="flex-1 overflow-auto bg-white/5 rounded-2xl border border-white/10 shadow-xl px-2 pb-6 pt-2 md:px-6 mt-4 text-white backdrop-blur-md">
            <div className="max-w-6xl mx-auto">
              {viewMode === "month" && (
                <MonthView
                  currentDate={currentDate}
                  today={today}
                  activeTypes={activeTypes}
                  activeOwners={activeOwners}
                  activeFormatos={activeFormatos}
                  searchQuery={searchQuery}
                  onSelectEvent={setSelectedEvent}
                />
              )}

              {viewMode === "week" && (
                <WeekView
                  currentDate={currentDate}
                  today={today}
                  activeTypes={activeTypes}
                  activeOwners={activeOwners}
                  activeFormatos={activeFormatos}
                  searchQuery={searchQuery}
                  onSelectEvent={setSelectedEvent}
                />
              )}

              {viewMode === "list" && (
                <ListView
                  today={today}
                  activeTypes={activeTypes}
                  activeOwners={activeOwners}
                  activeFormatos={activeFormatos}
                  searchQuery={searchQuery}
                  onSelectEvent={setSelectedEvent}
                />
              )}
            </div>
          </main>
        </div>

        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
