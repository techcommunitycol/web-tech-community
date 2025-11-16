import type { EventMeta } from "../types";

import img1 from "../../../assets/events/imgEvent1.jpeg";
import img2 from "../../../assets/events/imgEvent2.jpeg";
import img3 from "../../../assets/events/imgEvent3.jpeg";
import img4 from "../../../assets/events/imgEvent4.jpeg";
import img5 from "../../../assets/events/imgEvent5.jpeg";
import img6 from "../../../assets/events/imgEvent6.jpeg";
import img7 from "../../../assets/events/imgEvent7.jpeg";

export const EVENTS: EventMeta[] = [
  {
    id: "evt-001",
    title: "IA en la Web: de cero a demo",
    dateISO: "2025-08-22",
    venue: "Universidad EAFIT",
    city: "Medellín",
    tags: ["IA", "Web", "Demo"],
    descShort: "Workshop práctico creando un asistente con API de IA y front en React.",
    descLong:
      "Sesión 100% práctica: prompt design, llamadas a API, manejo de contexto y UX responsable. Se cubrieron patrones de integración (fetch, streaming) y seguridad básica en el frontend.",
    media: [
      { kind: "image", src: img1, alt: "Asistentes en el workshop de IA" },
      { kind: "image", src: img2, alt: "Demo en vivo del asistente" },
      { kind: "video", provider: "youtube", id: "dQw4w9WgXcQ", title: "Recap del evento" }, // ejemplo
    ],
    speakers: [
      { name: "Brayan Cardona", role: "Full-stack & AI", link: "https://eldevbrayan.com" }
    ],
    resources: {
      slides: "https://tu-slides.com/ia-web",
      repo: "https://github.com/tu-org/ia-web-demo",
      recap: "https://tu-blog.com/recap-ia-web"
    },
    stats: { attendees: 120, satisfaction: 4.7 }
  },
  {
    id: "evt-002",
    title: "Mentorías 1:1 – Ruta a primer empleo",
    dateISO: "2025-07-10",
    venue: "TechCommunity HQ",
    city: "Medellín",
    tags: ["Mentorías", "Carrera"],
    descShort: "Sesiones 1:1 con plan de acción, CV, portafolio y simulación de entrevista.",
    media: [
      { kind: "image", src: img3, alt: "Sesión de mentoría" },
      { kind: "image", src: img4, alt: "Ejercicio de portafolio" },
    ],
  },
  {
    id: "evt-003",
    title: "Meetup de comunidades aliadas",
    dateISO: "2025-06-14",
    city: "Medellín",
    tags: ["Networking", "Comunidades"],
    descShort: "Panel con líderes, agenda conjunta y anuncio de próximas colaboraciones.",
    media: [
      { kind: "image", src: img5, alt: "Panel de comunidades" },
      { kind: "image", src: img6, alt: "Networking posterior" },
      { kind: "image", src: img7, alt: "Cierre del evento" },
    ],
  },
];
