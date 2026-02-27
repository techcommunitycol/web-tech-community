import CalendarPage from "./CalendarPage";

export default function CalendarModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-950/88 backdrop-blur-md">
      <div
        className="absolute inset-0 flex min-h-0 flex-col overflow-hidden bg-[#0b1020] shadow-[0_30px_100px_rgba(0,0,0,0.42)]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(54,151,156,0.18)] via-[rgba(54,151,156,0.08)] to-transparent" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-[rgba(54,151,156,0.20)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-[rgba(54,151,156,0.18)] blur-3xl" />

        <div className="relative z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-sm sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              Agenda
            </p>
            <h2 className="text-sm font-semibold text-slate-100 sm:text-base">
              Calendario de eventos
            </h2>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-primary/30 hover:bg-white/[0.08] focus:outline-none"
            aria-label="Cerrar calendario"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative min-h-0 flex-1 overflow-hidden px-3 py-3 sm:px-6 sm:py-5">
          <CalendarPage embedded />
        </div>
      </div>
    </div>
  );
}
