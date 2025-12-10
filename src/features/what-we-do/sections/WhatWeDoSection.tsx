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
      <div className="bg-gray-900 rounded-2xl border border-gray-600 p-6 md:p-8 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, var(--color-primary-rgba-12, rgba(54,151,156,0.06)), transparent 40%)" }}
        />

        <p className="mb-6 text-sm text-gray-300 max-w-2xl">
          Diseñamos programas educativos, eventos y alianzas para reducir brechas de acceso y potenciar talento en comunidades vulnerables.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 auto-rows-fr">
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
            className="px-4 py-2 rounded-lg border border-gray-600 bg-[rgba(90,96,99,0.06)] text-gray-200 hover:bg-[rgba(90,96,99,0.10)]"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </Section>
  );
}
