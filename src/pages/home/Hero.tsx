export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-6">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(54,151,156,0.22),transparent_38%),linear-gradient(180deg,#0b1120_0%,#111111_46%,#0f172a_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="pointer-events-none absolute -top-44 left-[-6rem] h-96 w-96 rounded-full bg-[rgba(54,151,156,0.28)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-16 h-[24rem] w-[24rem] rounded-full bg-[rgba(10,73,165,0.22)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-7rem] left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Comunidad abierta · LATAM
          </span>

            <div className="mt-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Bienvenidos a
                <span className="block mt-2 leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-100 to-primary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(54,151,156,0.18)]">
                    Tech Community
                  </span>
                </span>
              </h1>
            </div>

            <p className="mt-5 text-lg leading-relaxed text-gray-300 md:max-w-2xl">
              Somos un ecosistema de educación e innovación tecnológica que conecta personas, comunidades y empresas para democratizar el conocimiento, impulsar el talento colombiano y crear oportunidades de impacto social, investigación y empleabilidad en Latinoamérica.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#about"
                className="inline-flex items-center rounded-xl border border-primary/40 bg-primary px-5 py-3 text-sm font-semibold text-gray-200 shadow-[0_18px_50px_rgba(54,151,156,0.22)] transition hover:bg-[rgba(54,151,156,0.9)] hover:shadow-[0_22px_60px_rgba(54,151,156,0.32)]"
              >
                Conoce más
              </a>
              <a
                href="#team"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition hover:border-primary/30 hover:bg-white/[0.05]"
              >
                Nuestro equipo
              </a>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-950 shadow-lg" src="https://i.pravatar.cc/64?img=15" alt="miembro 1" />
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-950 shadow-lg" src="https://i.pravatar.cc/64?img=36" alt="miembro 2" />
                <img className="h-8 w-8 rounded-full ring-2 ring-slate-950 shadow-lg" src="https://i.pravatar.cc/64?img=47" alt="miembro 3" />
                <div className="grid h-8 w-8 place-items-center rounded-full bg-white/5 text-xs text-gray-200 ring-2 ring-slate-950">
                  +99
                </div>
              </div>
              <p className="text-sm text-gray-200">
                +3.5k miembros · 50+ eventos · 15 comunidades aliadas
              </p>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-xl lg:block">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-2/3 rounded-full bg-white/10" />
                    <div className="h-24 rounded-2xl border border-white/5 bg-[linear-gradient(135deg,rgba(54,151,156,0.14),rgba(10,73,165,0.16))] p-4">
                      <div className="grid h-full grid-cols-4 gap-2">
                        <div className="rounded-xl bg-white/5" />
                        <div className="rounded-xl bg-white/10" />
                        <div className="rounded-xl bg-white/5" />
                        <div className="rounded-xl bg-white/10" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-14 rounded-xl bg-white/5" />
                      <div className="h-14 rounded-xl bg-white/10" />
                      <div className="h-14 rounded-xl bg-white/5" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="h-2 w-10 rounded-full bg-white/10" />
                    <div className="mt-3 h-8 rounded-xl bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="h-2 w-12 rounded-full bg-white/10" />
                    <div className="mt-3 h-8 rounded-xl bg-gradient-to-r from-blue-500/30 to-transparent" />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="h-2 w-9 rounded-full bg-white/10" />
                    <div className="mt-3 h-8 rounded-xl bg-gradient-to-r from-cyan-300/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
