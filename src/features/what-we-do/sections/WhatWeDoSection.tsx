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
      <div className="grid md:grid-cols-3 gap-6">
        {WHAT_WE_DO_ITEMS.map((it) => (
          <WhatWeDoCard key={it.slug} item={it} onOpen={onOpen} />
        ))}
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} titleId={titleId}>
        {active && <WhatWeDoModalBody item={active} />}
        <div className="mt-8 flex justify-end gap-3">
          {/* Botón “Ver más” opcional (si más adelante haces ruta /what-we-do/:slug) */}
          {/* <Link to={`/what-we-do/${active?.slug}`} className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500">
            Ver más
          </Link> */}
          <button
            className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </Section>
  );
}
