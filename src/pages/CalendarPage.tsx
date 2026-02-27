import CalendarApp from "../features/calendar/CalendarApp";

export default function CalendarFullPage() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-12 overflow-hidden bg-[#0b1020] text-white">
      <div className="absolute inset-0 -z-20 bg-[#0b1020]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(54,151,156,0.18)] via-[rgba(54,151,156,0.08)] to-transparent" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.25)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.20)] blur-3xl" />

      <div className="relative w-full max-w-6xl px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[rgba(54,151,156,1)] mb-8 text-center tracking-tight">
          Calendario de eventos
        </h1>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] p-4 md:p-6">
          <CalendarApp />
        </div>
      </div>
    </section>
  );
}
