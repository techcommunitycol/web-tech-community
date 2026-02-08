import React from "react";
import {
  FORMATOS,
  type EventType,
  type FormatoType,
} from "./CalendarComponents";

type CalendarSidebarProps = {
  activeTypes: EventType[];
  setActiveTypes: React.Dispatch<React.SetStateAction<EventType[]>>;
  allOwners: string[];
  activeOwners: string[];
  setActiveOwners: React.Dispatch<React.SetStateAction<string[]>>;
  activeFormatos: FormatoType[];
  setActiveFormatos: React.Dispatch<React.SetStateAction<FormatoType[]>>;
  /** En mobile: overlay abierto/cerrado */
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
};

const toggleItem = <T,>(prev: T[], item: T): T[] =>
  prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item];

const CalendarSidebar: React.FC<CalendarSidebarProps> = ({
  activeTypes,
  setActiveTypes,
  allOwners,
  activeOwners,
  setActiveOwners,
  activeFormatos,
  setActiveFormatos,
  isMobileOpen = false,
  onMobileClose,
}) => {
  const content = (
    <>
      <div className="h-14 flex items-center px-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/80" />
          <span className="font-semibold text-sm text-white">
            Tech <span className="text-primary">Community</span>
          </span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 text-sm">
        {/* Tipos de eventos */}
        <p className="mt-6 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Tipos de eventos:
        </p>

        <div className="space-y-1 px-1">
          <button
            type="button"
            onClick={() =>
              setActiveTypes((prev) => toggleItem(prev, "language-exchange"))
            }
            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-xs transition ${
              activeTypes.includes("language-exchange")
                ? "bg-gray-800 text-gray-100"
                : "bg-gray-800/40 text-gray-400"
            }`}
          >
            <span>Intercambios de idiomas</span>
            <span className="h-2.5 w-2.5 rounded-full bg-brand-400" />
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveTypes((prev) => toggleItem(prev, "tech"))
            }
            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-xs transition ${
              activeTypes.includes("tech")
                ? "bg-gray-800 text-gray-100"
                : "bg-gray-800/40 text-gray-400"
            }`}
          >
            <span>Eventos Tech</span>
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveTypes((prev) => toggleItem(prev, "others"))
            }
            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-xs transition ${
              activeTypes.includes("others")
                ? "bg-gray-800 text-gray-100"
                : "bg-gray-800/40 text-gray-400"
            }`}
          >
            <span>Otros</span>
            <span className="h-2.5 w-2.5 rounded-full bg-brand-600" />
          </button>
        </div>

        {/* Filtros */}
        <p className="mt-6 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Filtros:
        </p>

        {/* Organizador */}
        <p className="px-2 text-[11px] text-gray-400 mb-1">Organizador:</p>
        <div className="space-y-1 px-1">
          {allOwners.map((owner) => {
            const isActive = activeOwners.includes(owner);
            return (
              <button
                key={owner}
                type="button"
                onClick={() =>
                  setActiveOwners((prev) => toggleItem(prev, owner))
                }
                className={`flex w-full items-center justify-between rounded-md px-3 py-1.5 text-xs transition ${
                  isActive
                    ? "bg-gray-800 text-gray-100"
                    : "bg-gray-800/40 text-gray-400"
                }`}
              >
                <span className="truncate">{owner}</span>
                <span className="text-[10px] uppercase tracking-wide">
                  {isActive ? "ON" : "OFF"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Formato */}
        <p className="mt-6 px-2 text-[11px] text-gray-400 mb-1">Formato:</p>
        <div className="space-y-1 px-1">
          {FORMATOS.map((formato) => {
            const isActive = activeFormatos.includes(formato);
            return (
              <button
                key={formato}
                type="button"
                onClick={() =>
                  setActiveFormatos((prev) => toggleItem(prev, formato))
                }
                className={`flex w-full items-center justify-between rounded-md px-3 py-1.5 text-xs transition ${
                  isActive
                    ? "bg-gray-800 text-gray-100"
                    : "bg-gray-800/40 text-gray-400"
                }`}
              >
                <span>{formato}</span>
                <span className="text-[10px] uppercase tracking-wide">
                  {isActive ? "ON" : "OFF"}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-gray-700 px-4 py-3 text-xs text-gray-500">
        Eventos mensuales de tecnología e intercambios de idiomas.
      </div>
    </>
  );

  return (
    <>
      {/* Overlay móvil */}
      {isMobileOpen && onMobileClose && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onMobileClose}
          aria-hidden
        />
      )}
      {/* Sidebar: overlay en mobile, fijo en desktop */}
      <aside
        className={`
          flex flex-col w-56 xl:w-64 flex-shrink-0 bg-gray-900 border-r border-gray-700
          fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto
          transform transition-transform duration-200 ease-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          lg:flex
        `}
      >
        {onMobileClose && (
          <button
            onClick={onMobileClose}
            className="lg:hidden absolute top-3 right-3 p-1 rounded text-gray-400 hover:text-white"
            aria-label="Cerrar filtros"
          >
            ✕
          </button>
        )}
        {content}
      </aside>
    </>
  );
};

export default CalendarSidebar;
