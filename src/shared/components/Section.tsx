import type { ReactNode } from "react";

export default function Section({
  id, title, subtitle, children,
}: { id?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section id={id} className="relative py-16 md:py-20">
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(54,151,156,0.55)]" />
            Tech Community
          </div>

          <div className="mt-4 flex items-start gap-4 md:gap-5">
            <span className="mt-1 hidden h-14 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:block" />
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
              {subtitle && (
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
