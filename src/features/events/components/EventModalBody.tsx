import type { EventMeta } from "../types";
import EventGallery from "./EventGallery";

export default function EventModalBody({ evt }: { evt: EventMeta }) {
  return (
    <>
      {/* Encabezado */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 id="event-modal-title" className="text-xl font-semibold text-white">
            {evt.title}
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            {new Date(evt.dateISO).toLocaleDateString()} {evt.city ? `· ${evt.city}` : ""} {evt.venue ? `· ${evt.venue}` : ""}
          </p>
          {evt.tags && (
            <div className="mt-2 flex flex-wrap gap-2">
              {evt.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-200">
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>
        {evt.stats && (
          <div className="flex items-center gap-4">
            {evt.stats.attendees != null && (
              <div className="text-center">
                <div className="text-lg font-bold text-white">{evt.stats.attendees}</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-400">Asistentes</div>
              </div>
            )}
            {evt.stats.satisfaction != null && (
              <div className="text-center">
                <div className="text-lg font-bold text-white">{evt.stats.satisfaction}★</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-400">Satisfacción</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Galería */}
      <div className="mt-5">
        <EventGallery media={evt.media} />
      </div>

      {/* Descripción */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold text-slate-200">Descripción</h4>
          <p className="mt-2 text-slate-300">
            {evt.descLong || evt.descShort}
          </p>
        </div>

        {/* Speakers / Recursos */}
        <div className="space-y-5">
          {evt.speakers && evt.speakers.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Speakers</h4>
              <ul className="mt-2 space-y-2">
                {evt.speakers.map((s) => (
                  <li key={s.name} className="flex items-center gap-3">
                    {s.avatar ? (
                      <img src={s.avatar} alt={s.name} className="h-8 w-8 rounded-full object-cover" />
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-white/10" />
                    )}
                    <div className="min-w-0">
                      <div className="text-sm text-white">{s.name}</div>
                      {s.role && <div className="text-xs text-slate-400">{s.role}</div>}
                    </div>
                    {s.link && (
                      <a href={s.link} target="_blank" rel="noreferrer" className="ml-auto text-xs text-indigo-300 hover:text-indigo-200">
                        Perfil →
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {evt.resources && (
            <div>
              <h4 className="text-sm font-semibold text-slate-200">Recursos</h4>
              <div className="mt-2 flex flex-col gap-2">
                {evt.resources.slides && (
                  <a className="text-sm text-indigo-300 hover:text-indigo-200" href={evt.resources.slides} target="_blank" rel="noreferrer">
                    Ver slides →
                  </a>
                )}
                {evt.resources.repo && (
                  <a className="text-sm text-indigo-300 hover:text-indigo-200" href={evt.resources.repo} target="_blank" rel="noreferrer">
                    Repositorio →
                  </a>
                )}
                {evt.resources.recap && (
                  <a className="text-sm text-indigo-300 hover:text-indigo-200" href={evt.resources.recap} target="_blank" rel="noreferrer">
                    Post-recap →
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
