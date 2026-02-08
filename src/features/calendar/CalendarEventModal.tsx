import React from "react";
import { type CalendarEvent } from "./CalendarComponents";

type EventModalProps = {
  event: CalendarEvent;
  onClose: () => void;
};

const EventModal: React.FC<EventModalProps> = ({ 
  event, 
  onClose 
}) => {
  const handleBackdropClick = () => onClose();

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-900 border border-gray-700 p-4 md:p-6 text-sm text-gray-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold">{event.title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-white hover:bg-gray-800"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Columna izquierda */}
          <div className="rounded-2xl bg-gray-800/80 border border-gray-700 px-4 py-4 space-y-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase">
                Fecha
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span>📅</span>
                <span>
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>

            {event.location && (
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase">
                  Lugar
                </p>
                <p className="flex items-center gap-2 text-sm">
                  <span>📍</span>
                  <span>{event.location}</span>
                </p>
              </div>
            )}

            {event.time && (
              <div className="space-y-1">
                <p className="text-xs font-semibold text-gray-400 uppercase">
                  Horario
                </p>
                <p className="text-sm">{event.time}</p>
              </div>
            )}

            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase">
                Formato
              </p>
              <p className="text-sm">{event.format}</p>
            </div>
          </div>

          {/* Columna derecha */}
          <div>
            <p className="text-sm font-semibold mb-1">Detalles</p>
            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              {event.description ??
                "This event is part of the community calendar. Join to learn, connect and collaborate with other members."}
            </p>

            {event.url && (
              <div className="space-y-1">
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition"
                >
                  Registrate aquí
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
