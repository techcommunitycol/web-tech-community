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
}) => {
  return (
    <aside className="hidden md:flex md:flex-col w-64 bg-slate-950 border-r border-slate-800">
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-sky-500" />
          <span className="font-semibold text-sm">
            Tech <span className="text-sky-300">Community</span>
          </span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 text-sm">
        {/* Tipos de eventos */}
        <p className="mt-6 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
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
                ? "bg-slate-900 text-slate-100"
                : "bg-slate-900/40 text-slate-400"
            }`}
          >
            <span>Intercambios de idiomas</span>
            <span className="h-2.5 w-2.5 rounded-full bg-rose-600" />
          </button>

          <button
            type="button"
            onClick={() =>
              setActiveTypes((prev) => toggleItem(prev, "tech"))
            }
            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-xs transition ${
              activeTypes.includes("tech")
                ? "bg-slate-900 text-slate-100"
                : "bg-slate-900/40 text-slate-400"
            }`}
          >
            <span>Eventos Tech</span>
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
          </button>
        </div>

        {/* Filtros */}
        <p className="mt-6 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
          Filtros:
        </p>

        {/* Organizador */}
        <p className="px-2 text-[11px] text-slate-400 mb-1">Organizador:</p>
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
                    ? "bg-slate-900 text-slate-100"
                    : "bg-slate-900/40 text-slate-400"
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
        <p className="mt-6 px-2 text-[11px] text-slate-400 mb-1">Formato:</p>
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
                    ? "bg-slate-900 text-slate-100"
                    : "bg-slate-900/40 text-slate-400"
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

      <div className="border-t border-slate-800 px-4 py-3 text-xs text-slate-500">
        Eventos mensuales de tecnología e intercambios de idiomas.
      </div>
    </aside>
  );
};

export default CalendarSidebar;
