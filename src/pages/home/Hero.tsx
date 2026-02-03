export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="pointer-events-none absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.25)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[rgba(54,151,156,0.20)] blur-3xl" />

      <div className="container mx-auto px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-[rgba(90,96,99,0.12)] px-3 py-1 text-xs text-gray-300">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Comunidad abierta · LATAM
          </span>

          <div className="mt-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Bienvenidos a
              <span className="block mt-2 leading-tight">
                <span className="text-primary">Tech Community</span>
              </span>
            </h1>
          </div>

          <p className="mt-5 text-lg text-gray-300">
            Somos un ecosistema de educación e innovación tecnológica que conecta personas, comunidades y empresas para democratizar el conocimiento, impulsar el talento colombiano y crear oportunidades de impacto social, investigación y empleabilidad en Latinoamérica.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#about"
              className="inline-flex items-center rounded-xl bg-primary hover:bg-[rgba(54,151,156,0.9)] px-5 py-3 text-sm font-semibold text-gray-200 shadow"
            >
              Conoce más
            </a>
            <a
              href="#team"
              className="inline-flex items-center rounded-xl border border-gray-600 hover:border-primary/30 px-5 py-3 text-sm font-semibold text-gray-200"
            >
              Nuestro equipo
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="flex -space-x-2">
              <img className="h-8 w-8 rounded-full ring-2 ring-gray-900" src="https://i.pravatar.cc/64?img=15" alt="miembro 1" />
              <img className="h-8 w-8 rounded-full ring-2 ring-gray-900" src="https://i.pravatar.cc/64?img=36" alt="miembro 2" />
              <img className="h-8 w-8 rounded-full ring-2 ring-gray-900" src="https://i.pravatar.cc/64?img=47" alt="miembro 3" />
              <div className="h-8 w-8 rounded-full ring-2 ring-gray-900 bg-[rgba(90,96,99,0.10)] text-xs grid place-items-center text-gray-200">
                +99
              </div>
            </div>
            <p className="text-sm text-gray-200">
              +3.5k miembros · 50+ eventos · 15 comunidades aliadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
