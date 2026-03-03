import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type {
  CalendarEvent,
  EventType,
  FormatoType,
} from "../features/calendar/CalendarComponents";

type AdminEventForm = {
  title: string;
  date: string;
  city: string;
  location: string;
  time: string;
  type: EventType;
  owner: string;
  format: FormatoType;
  description: string;
  url: string;
};

const INITIAL_EVENT: AdminEventForm = {
  title: "",
  date: "",
  city: "",
  location: "",
  time: "",
  type: "tech",
  owner: "Tech Community",
  format: "Presencial",
  description: "",
  url: "",
};

const TYPES: { value: EventType; label: string }[] = [
  { value: "tech", label: "Tecnología" },
  { value: "language-exchange", label: "Intercambio de idiomas" },
  { value: "others", label: "Otros" },
];

const FORMATS: FormatoType[] = ["Presencial", "Virtual", "Híbrido"];

function getCreatedEventsCount() {
  try {
    const local = localStorage.getItem("calendarEvents");
    if (!local) return 0;
    const parsed = JSON.parse(local);
    return Array.isArray(parsed) ? parsed.length : 0;
  } catch {
    return 0;
  }
}

function getCreatedEvents(): CalendarEvent[] {
  try {
    const local = localStorage.getItem("calendarEvents");
    if (!local) return [];
    const parsed = JSON.parse(local);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function AdminPage() {
  const navigate = useNavigate();
  const [event, setEvent] = useState<AdminEventForm>(INITIAL_EVENT);
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [createdEventsCount, setCreatedEventsCount] = useState(0);
  const [createdEvents, setCreatedEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    const session = localStorage.getItem("adminSession");
    if (!session) {
      navigate("/orion");
      return;
    }
    setCreatedEventsCount(getCreatedEventsCount());
    setCreatedEvents(getCreatedEvents());
  }, [navigate]);

  const adminName = useMemo(() => "Administrador Tech Community", []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const local = localStorage.getItem("calendarEvents");
    const arr = local ? JSON.parse(local) : [];

    const normalizedLocation = [event.location.trim(), event.city.trim()]
      .filter(Boolean)
      .join(" - ");

    const newEvent = {
      id: Date.now().toString(),
      title: event.title.trim(),
      date: event.date,
      location: normalizedLocation || "Por confirmar",
      time: event.time.trim(),
      type: event.type,
      owner: event.owner.trim() || "Tech Community",
      format: event.format,
      description: event.description.trim(),
      url: event.url.trim(),
    };

    arr.push(newEvent);
    localStorage.setItem("calendarEvents", JSON.stringify(arr));

    setSuccess("Evento creado correctamente. Ya está disponible en el calendario.");
    setEvent(INITIAL_EVENT);
    setCreatedEventsCount(arr.length);
    setCreatedEvents(arr);
    setShowForm(false);
  };

  const handleDeleteEvent = (id: string) => {
    const updatedEvents = createdEvents.filter((createdEvent) => createdEvent.id !== id);
    localStorage.setItem("calendarEvents", JSON.stringify(updatedEvents));
    setCreatedEvents(updatedEvents);
    setCreatedEventsCount(updatedEvents.length);
    setSuccess("Evento eliminado correctamente.");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-950 text-slate-100 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Panel privado</p>
              <h1 className="mt-1 text-2xl font-bold text-primary md:text-3xl">Perfil administrador</h1>
              <p className="mt-2 text-sm text-slate-300">{adminName}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowForm(true);
                  setSuccess("");
                }}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary/85"
              >
                Crear evento
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-white/5"
              >
                Cerrar sesión
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs text-slate-400">Eventos creados</p>
              <p className="mt-1 text-2xl font-bold">{createdEventsCount}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs text-slate-400">Acceso</p>
              <p className="mt-1 text-sm font-semibold text-emerald-400">Ingreso de admin por URL privada</p>
            </div>
          </div>
        </section>

        {success && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            {success}
          </div>
        )}

        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl backdrop-blur"
          >
            <h2 className="mb-4 text-xl font-semibold">Nuevo evento</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Título</label>
                <input
                  name="title"
                  value={event.title}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Fecha</label>
                <input
                  name="date"
                  type="date"
                  value={event.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Hora</label>
                <input
                  name="time"
                  value={event.time}
                  onChange={handleChange}
                  placeholder="7:00 PM"
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Ciudad</label>
                <input
                  name="city"
                  value={event.city}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Lugar</label>
                <input
                  name="location"
                  value={event.location}
                  onChange={handleChange}
                  placeholder="Auditorio / Online"
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Organiza</label>
                <input
                  name="owner"
                  value={event.owner}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Tipo</label>
                <select
                  name="type"
                  value={event.type}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                >
                  {TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Formato</label>
                <select
                  name="format"
                  value={event.format}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                >
                  {FORMATS.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">Descripción</label>
                <textarea
                  name="description"
                  value={event.description}
                  onChange={handleChange}
                  required
                  className="min-h-28 w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-200">URL del evento (opcional)</label>
                <input
                  name="url"
                  value={event.url}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                className="rounded-lg border border-white/20 px-4 py-2 font-semibold text-slate-200 hover:bg-white/5"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 font-semibold text-white shadow hover:bg-primary/85"
              >
                Guardar evento
              </button>
            </div>
          </form>
        )}

        <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl">
          <h2 className="text-xl font-semibold">Eventos creados</h2>
          <p className="mt-1 text-sm text-slate-400">
            Aquí puedes revisar y borrar los eventos que creaste desde este panel.
          </p>

          <div className="mt-4 space-y-3">
            {createdEvents.length === 0 ? (
              <p className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm text-slate-400">
                Aún no hay eventos creados.
              </p>
            ) : (
              createdEvents
                .slice()
                .reverse()
                .map((createdEvent) => (
                  <div
                    key={createdEvent.id}
                    className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/20 p-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="font-semibold text-slate-100">{createdEvent.title}</p>
                      <p className="text-xs text-slate-400">
                        {createdEvent.date} {createdEvent.time ? `• ${createdEvent.time}` : ""}
                      </p>
                      <p className="text-xs text-slate-400">
                        {createdEvent.location || "Ubicación por confirmar"} • {createdEvent.format}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteEvent(createdEvent.id)}
                      className="rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/20"
                    >
                      Borrar
                    </button>
                  </div>
                ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
