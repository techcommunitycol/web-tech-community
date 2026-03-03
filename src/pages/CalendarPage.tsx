import CalendarApp from "../features/calendar/CalendarApp";
import { Link } from "react-router-dom";

export default function CalendarFullPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 overflow-hidden bg-[#0b1020] text-white">
      <div className="absolute inset-0 -z-20 bg-[#0b1020]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(54,151,156,0.18)] via-[rgba(54,151,156,0.08)] to-transparent" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.25)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.20)] blur-3xl" />

      <div className="relative w-full max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Agenda
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-[rgba(54,151,156,1)] tracking-tight">
              Calendario de eventos
            </h1>
          </div>

          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition hover:border-primary/25 hover:bg-white/[0.08]"
          >
            Volver a la web
          </Link>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] p-4 md:p-6">
          <CalendarApp />
        </div>
      </div>
    </section>
  );
}
