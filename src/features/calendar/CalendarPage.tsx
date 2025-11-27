// src/features/calendar/CalendarPage.tsx
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
  const [activeFormatos, setActiveFormatos] =
    useState<FormatoType[]>([] as FormatoType[] || [...new Set(EVENTS.map(e => e.format as FormatoType))]); // si prefieres puedes dejarlo como antes: useState<FormatoType[]>([...FORMATOS])

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
    <div className="min-h-screen bg-slate-950 text-slate-50 flex">
      {/* Sidebar separado */}
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
        {/* Header */}
        <header className="h-16 flex items-center justify-between border-b border-slate-800 px-4 md:px-6 bg-slate-950">
          <div className="flex items-center gap-2">
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-300">
              ☰
            </button>
            <div>
              <h1 className="text-sm md:text-base font-semibold">
                Calendario
              </h1>
              <p className="text-xs text-slate-400">
                Descubre nuestros eventos y explora cada uno de ellos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-900"
            >
              🔍 Búsqueda
            </button>

            {isSearchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar eventos..."
                className="hidden sm:block rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            )}

            <button className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500">
              + Nuevo evento
            </button>
          </div>
        </header>

        {/* Toolbar de navegación */}
        <div className="border-b border-slate-800 px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-3 bg-slate-950">
          <div className="flex items-center gap-2">
            <button
              onClick={() => changePeriod(-1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-800 text-slate-200"
            >
              ‹
            </button>
            <button
              onClick={() => changePeriod(1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-800 text-slate-200"
            >
              ›
            </button>
            <span className="ml-1 text-sm md:text-base font-semibold">
              {monthLabel}
            </span>
            <button
              onClick={goToToday}
              className="ml-3 rounded-md border border-slate-700 px-3 py-1 text-xs text-slate-200 hover:bg-slate-900"
            >
              Hoy
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setViewMode("month")}
              className={`rounded-md px-3 py-1 ${
                viewMode === "month"
                  ? "bg-slate-800 text-slate-100"
                  : "text-slate-400 hover:bg-slate-900"
              }`}
            >
              Mes
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`rounded-md px-3 py-1 ${
                viewMode === "week"
                  ? "bg-slate-800 text-slate-100"
                  : "text-slate-400 hover:bg-slate-900"
              }`}
            >
              Semana
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md px-3 py-1 ${
                viewMode === "list"
                  ? "bg-slate-800 text-slate-100"
                  : "text-slate-400 hover:bg-slate-900"
              }`}
            >
              Todos
            </button>
          </div>
        </div>

        {/* Contenido principal */}
        <main className="flex-1 overflow-auto bg-slate-950 px-2 pb-6 pt-2 md:px-6">
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

      {/* Modal separado */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default CalendarPage;
