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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }))
  );
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [activeTypes, setActiveTypes] = useState<EventType[]>([
    "language-exchange",
    "tech",
    "others",
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const allOwners = getUniqueOwners(EVENTS);
  const [activeOwners, setActiveOwners] = useState<string[]>(allOwners);
  const [activeFormatos, setActiveFormatos] = useState<FormatoType[]>([
    ...new Set(EVENTS.map((e) => e.format as FormatoType)),
  ]);
  const today = new Date();
  const monthLabel = currentDate.toLocaleDateString("es-CO", {
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
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col md:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <CalendarSidebar
        activeTypes={activeTypes}
        setActiveTypes={setActiveTypes}
        allOwners={allOwners}
        activeOwners={activeOwners}
        setActiveOwners={setActiveOwners}
        activeFormatos={activeFormatos}
        setActiveFormatos={setActiveFormatos}
        isMobileOpen={isSidebarOpen}
        onMobileClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 w-full overflow-hidden">
        {/* Header */}
        <header className="flex-shrink-0 h-14 md:h-16 flex items-center justify-between border-b border-gray-700 px-4 md:px-6 bg-gray-900">
          <div className="flex items-center gap-2 min-w-0">
            <div>
              <h1 className="text-sm md:text-base font-semibold text-white truncate">
                Calendario
              </h1>
              <p className="text-xs text-gray-400 truncate">
                Descubre nuestros eventos y explora cada uno de ellos.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden inline-flex items-center gap-2 rounded-lg border border-gray-600 px-3 py-1.5 text-xs text-gray-300 hover:bg-gray-800/50"
            >
              Filtros
            </button>
            <button
              type="button"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-gray-600 px-3 py-1.5 text-xs text-gray-300 hover:bg-gray-800/50"
            >
              🔍 Búsqueda
            </button>

            {isSearchOpen && (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar eventos..."
                className="hidden sm:block rounded-md border border-gray-600 bg-gray-900 px-2 py-1 text-xs text-gray-100 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            )}
          </div>
        </header>

        {/* Toolbar de navegación */}
        <div className="flex-shrink-0 border-b border-gray-700 px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-3 bg-gray-900">
          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => changePeriod(-1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-800 text-gray-300"
              aria-label="Mes anterior"
            >
              ‹
            </button>
            <button
              onClick={() => changePeriod(1)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-800 text-gray-300"
              aria-label="Mes siguiente"
            >
              ›
            </button>
            <span className="ml-1 text-sm md:text-base font-semibold text-white">
              {monthLabel}
            </span>
            <button
              onClick={goToToday}
              className="ml-2 md:ml-3 rounded-md border border-gray-600 px-2 md:px-3 py-1 text-xs text-gray-300 hover:bg-gray-800"
            >
              Hoy
            </button>
          </div>

          <div className="flex items-center gap-1 text-xs">
            <button
              onClick={() => setViewMode("month")}
              className={`rounded-md px-2 md:px-3 py-1 ${viewMode === "month"
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:bg-gray-800"
                }`}
            >
              Mes
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`rounded-md px-2 md:px-3 py-1 ${viewMode === "week"
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:bg-gray-800"
                }`}
            >
              Semana
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md px-2 md:px-3 py-1 ${viewMode === "list"
                  ? "bg-primary text-white"
                  : "text-gray-400 hover:bg-gray-800"
                }`}
            >
              Todos
            </button>
          </div>
        </div>

        {/* Contenido principal - overflow-x-hidden evita scroll horizontal */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto min-h-0 bg-gray-900 px-2 md:px-4 lg:px-6 pb-6 pt-4">
          <div className="w-full max-w-6xl mx-auto overflow-hidden min-w-0">
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
