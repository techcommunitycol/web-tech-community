

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-400/20 via-brand-600/10 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-brand-700/20 blur-3xl" />

      <div className="container mx-auto px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <span className="size-1.5 rounded-full bg-brand-400 animate-pulse" />
            Comunidad abierta · LATAM
          </span>

          <div className="mt-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Bienvenidos a <span className="text-brand-500">TechCommunity</span>
            </h1>
          </div>

          <p className="mt-5 text-lg text-slate-300">
            Nuestra prioridad es apoyar a comunidades vulnerables como niños, mujeres, y poblaciones indígenas y rurales.
            Generamos oportunidades reales que cierran brechas de conocimiento y acceso a la tecnología.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center rounded-xl bg-brand-700 hover:bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow"
            >
              Conoce más
            </a>
            <a
              href="#team"
              className="inline-flex items-center rounded-xl border border-white/15 hover:border-brand-500/30 px-5 py-3 text-sm font-semibold text-white/90"
            >
              Nuestro equipo
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              <img className="h-8 w-8 rounded-full ring-2 ring-[#0b1020]" src="https://i.pravatar.cc/64?img=15" alt="miembro 1" />
              <img className="h-8 w-8 rounded-full ring-2 ring-[#0b1020]" src="https://i.pravatar.cc/64?img=36" alt="miembro 2" />
              <img className="h-8 w-8 rounded-full ring-2 ring-[#0b1020]" src="https://i.pravatar.cc/64?img=47" alt="miembro 3" />
              <div className="h-8 w-8 rounded-full ring-2 ring-[#0b1020] bg-white/10 text-xs grid place-items-center">
                +99
              </div>
            </div>
            <p className="text-sm text-slate-400">
              +3.5k miembros · 50+ eventos · 15 comunidades aliadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
