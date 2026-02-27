import { useState, useMemo } from "react";
import Section from "../../../shared/components/Section";
import Modal from "../../../shared/components/Modal";
import { WHAT_WE_DO_ITEMS } from "../data/items";
import type { WhatWeDoItem } from "../types";
import WhatWeDoCard from "../components/WhatWeDoCard";
import WhatWeDoModalBody from "../components/WhatWeDoModalBody";

export default function WhatWeDoSection() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<WhatWeDoItem | null>(null);

  const onOpen = (item: WhatWeDoItem) => {
    setActive(item);
    setOpen(true);
  };

  const titleId = useMemo(() => "whatwedo-modal-title", []);

  return (
    <Section
      id="what-we-do"
      title="¿Qué hacemos?"
      subtitle="Iniciativas concretas y medibles para activar el ecosistema tech."
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.85),rgba(17,17,17,0.92))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-10 [mask-image:radial-gradient(circle_at_top,black,transparent_72%)]" />
        <div
          className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(54,151,156,0.16), transparent 42%)" }}
        />
        <div className="pointer-events-none absolute bottom-[-3rem] left-1/3 h-40 w-40 rounded-full bg-[rgba(10,73,165,0.12)] blur-3xl" />

        <div className="relative z-10 mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Líneas de acción
          </div>
        </div>

        <p className="relative z-10 mb-6 max-w-2xl text-sm text-gray-300">
          Diseñamos programas educativos, eventos y alianzas para reducir brechas de acceso y potenciar talento en comunidades vulnerables.
        </p>

        <div className="relative z-10 grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {WHAT_WE_DO_ITEMS.map((it) => (
            <div key={it.slug} className="h-full">
              <WhatWeDoCard item={it} onOpen={onOpen} />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} titleId={titleId}>
        {active && <WhatWeDoModalBody item={active} />}

        <div className="mt-8 flex justify-end gap-3">
          <button
            className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-gray-200 hover:bg-white/[0.08]"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </Section>
  );
}
