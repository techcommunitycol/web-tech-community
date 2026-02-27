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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-full h-full sm:h-auto sm:w-full max-w-5xl mx-auto bg-[#0b1020] rounded-none sm:rounded-3xl shadow-2xl border border-white/10 overflow-hidden flex flex-col"
        style={{ maxHeight: "100vh" }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[rgba(54,151,156,0.18)] via-[rgba(54,151,156,0.08)] to-transparent" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-[rgba(54,151,156,0.20)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-[rgba(54,151,156,0.18)] blur-3xl" />

        <button
          onClick={onClose}
          className="fixed top-3 right-3 z-20 sm:absolute sm:top-4 sm:right-4 text-slate-100 hover:text-[rgba(54,151,156,1)] focus:outline-none"
          aria-label="Cerrar calendario"
        >
          <svg
            className="h-8 w-8 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-1 sm:p-6 overflow-y-auto h-full w-full">
          <CalendarPage />
        </div>
      </div>
    </div>
  );
}
