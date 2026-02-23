import type { ReactNode } from "react";

export default function Section({
  id, title, subtitle, children,
}: { id?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section id={id} className="py-16 overflow-x-hidden">
      <div className="container mx-auto px-6 min-w-0">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
        {subtitle && <p className="text-slate-300 mt-3 max-w-2xl">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
