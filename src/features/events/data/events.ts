import type { EventMeta } from "../types";

// Imágenes generales de eventos (si las sigues usando en otros eventos)
import img1 from "../../../assets/events/imgEvent1.jpeg";
import img2 from "../../../assets/events/imgEvent2.jpeg";
import img3 from "../../../assets/events/imgEvent3.jpeg";
import img4 from "../../../assets/events/imgEvent4.jpeg";

// Imágenes específicas de Guardianes Ancestrales
import guard1 from "../../../assets/events/guardianes/guard_1.jpg";
import guard2 from "../../../assets/events/guardianes/guard_2.jpeg";
import guard3 from "../../../assets/events/guardianes/guard_3.jpg";
import guard4 from "../../../assets/events/guardianes/guard_4.jpeg";
import guard5 from "../../../assets/events/guardianes/guard_5.jpeg";
import guard6 from "../../../assets/events/guardianes/guard_6.jpeg";
import guard7 from "../../../assets/events/guardianes/guard_7.jpeg";

export const EVENTS: EventMeta[] = [
  // 1. Intercambio de idiomas
  {
    id: "evt-LE-001",
    title: "Intercambios de Idiomas",
    dateISO: "2025-11-07",
    venue: "On going",
    city: "Medellín",
    tags: ["language exchange", "community", "english", "spanish"],
    descShort:
      "Sesiones semanales para practicar inglés y español en un ambiente seguro, divertido y multicultural.",
    descLong:
      "Nuestro intercambio de idiomas es un espacio continuo donde personas de todas las edades y niveles se reúnen para practicar inglés y español a través de dinámicas, conversaciones guiadas, juegos, networking y retos de pronunciación. Estas sesiones fortalecen la confianza, crean comunidad y conectan a personas del mundo con Medellín. Es uno de los programas más queridos de Tech Community.",
    media: [
      { kind: "image", src: img1, alt: "Participantes conversando en mesas de intercambio" },
      { kind: "image", src: img2, alt: "Actividad grupal durante el intercambio de idiomas" },
      {
        kind: "video",
        provider: "youtube",
        id: "dQw4w9WgXcQ",
        title: "Recap del intercambio de idiomas", // ejemplo
      },
    ],
  },

  // 2. Guardianes Ancestrales
  {
    id: "evt-guardianes-ancestrales",
    title: "Guardianes Ancestrales",
    dateISO: "2022-01-01", // 2022 – Actualidad
    venue: "",
    city: "Comunidades rurales de Colombia",
    tags: ["Niñez", "Educación", "Comunidades rurales"],
    descShort:
      "Programa social que lleva educación y tecnología a niños de comunidades rurales, integrando cultura y tradición.",
    descLong:
      "Fechas: 2022 – Actualidad. Reconocimiento: Guardianes Ancestrales, programa fundado por Rina Plata y Carolina Castañeda, apoyado por comunidades como pionerasdev y GDG Medellín. El objetivo es acercar la tecnología y la educación a niñas y niños de zonas rurales y apartadas con acceso limitado a recursos y conectividad. El proyecto combina formación en tecnología, creatividad y cultura, poniendo en valor las tradiciones ancestrales y el sentido de comunidad. El impacto incluye acceso a educación tecnológica, reducción de la brecha digital, inspiración y motivación para que la niñez imagine futuros posibles en ciencia y tecnología. Nuestro rol: diseño y ejecución de talleres, integración con líderes locales y familias, gestión de recursos y voluntariado, y acompañamiento cercano para transmitir la importancia de soñar, aprender y creer en su potencial.",
    media: [
      { kind: "image", src: guard1, alt: "Niños participando en taller de Guardianes Ancestrales" },
      { kind: "image", src: guard2, alt: "Actividad de tecnología con niñas y niños" },
      { kind: "image", src: guard3, alt: "Dinámica grupal en comunidad rural" },
      { kind: "image", src: guard4, alt: "Espacio de aprendizaje y juego" },
      { kind: "image", src: guard5, alt: "Equipo acompañando a la comunidad" },
      { kind: "image", src: guard6, alt: "Taller creativo con enfoque ancestral" },
      { kind: "image", src: guard7, alt: "Cierre de jornada con niños y voluntarios" },
    ],
  },

  // 3. Poder del 3D, Mobile y Diseño
  {
    id: "evt-3DMD-001",
    title: "Explorando el Poder del 3D, Mobile y Diseño",
    dateISO: "2025-10-25",
    venue: "Universidad EAFIT",
    city: "Medellín",
    tags: ["3D", "mobile", "design", "innovation", "community", "tech"],
    descShort:
      "Un evento para descubrir cómo las tecnologías 3D, Mobile y de Diseño están transformando la animación, los videojuegos, la realidad virtual y la impresión 3D.",
    descLong:
      "Un espacio creado junto a Tech Community y EAFIT para explorar cómo las tecnologías 3D, Mobile y de Diseño están impactando industrias como la animación, el gaming, la realidad virtual, los VFX y la impresión 3D. El evento demuestra que la innovación no depende de grandes recursos, sino del poder del software libre, la curiosidad y la fuerza de la comunidad. Con casos reales, creadores independientes y expertos internacionales, buscamos inspirar nuevas formas de crear y mostrar que el futuro está al alcance de todos.",
    media: [
      { kind: "image", src: img1, alt: "Asistentes al evento de 3D y diseño" },
      { kind: "image", src: img2, alt: "Demo de animación y diseño" },
      {
        kind: "video",
        provider: "youtube",
        id: "dQw4w9WgXcQ",
        title: "Recap del evento", // ejemplo
      },
    ],
  },

  // 4. In Tech Mom
  {
    id: "evt-intech-mom-rockstars-mentors",
    title: "Rock Stars Mentors – In Tech Mom LATAM",
    dateISO: "2022-12-01",
    venue: "",
    city: "Latinoamérica (online)",
    tags: ["Mentorías", "Mujeres en tech", "Impacto social"],
    descShort:
      "Programa intensivo para madres gestantes en situación vulnerable, formándolas en roles tecnológicos y desarrollo de MVP en equipo.",
    descLong:
      "Fechas: diciembre 2022 – junio 2023. Reconocimiento: Rock Stars Mentors. In Tech Mom LATAM es un programa gratuito creado por FUNDMADRE para mejorar la calidad de vida de mujeres embarazadas en contextos de violencia, vulnerabilidad económica o con poco acceso a educación. Se inscribieron cerca de 600 madres, de las cuales 120 fueron seleccionadas y se formaron en uno de siete roles: Frontend, Backend, Cloud, QA, UX/UI, PO o Scrum Master. Las participantes desarrollaron un MVP en equipo aplicando metodologías ágiles, historias de usuario y sprints. El mayor logro fue el empoderamiento, la confianza y la disciplina que ganaron, demostrando que pueden aprender, liderar y crecer profesionalmente mientras viven la maternidad. Nuestro rol: ser mentores dedicando noches y fines de semana a crear contenido educativo, clases grabadas y en vivo, exámenes y acompañamiento cercano a los equipos, enfrentando variables humanas como partos, cesáreas, depresión, síndrome del impostor y responsabilidades familiares, además de retos técnicos y de alfabetización digital.",
    media: [
      { kind: "image", src: img1, alt: "Sesión de mentoría en In Tech Mom LATAM" },
      { kind: "image", src: img2, alt: "Equipo trabajando en su MVP tecnológico" },
    ],
  },

  // 5. Organización eventos tech
  {
    id: "evt-organizacion-eventos-tech-2021",
    title: "Organización de eventos, charlas y talleres tecnológicos",
    dateISO: "2021-01-01",
    venue: "",
    city: "Medellín y online",
    tags: ["Eventos", "Comunidades", "Tecnología"],
    descShort:
      "Organización continua de eventos gratuitos en tecnología para democratizar el conocimiento y conectar comunidades.",
    descLong:
      "Fechas: 2021 – Actualidad. Reconocimiento: organización constante de eventos, charlas y talleres tecnológicos. Desde 2020 hemos creado y apoyado espacios gratuitos alrededor de datos, mobile, inteligencia artificial, cloud, desarrollo de software, diseño y liderazgo. Los eventos han sido virtuales y presenciales, con alcance local, regional e internacional, en alianza con comunidades tecnológicas y capítulos de Google Developer Groups de varios países. El impacto incluye espacios de aprendizaje inclusivos, fortalecimiento del ecosistema tecnológico, networking entre profesionales y estudiantes, y visibilización de talento local. Nuestro rol: planeación y ejecución integral de eventos, colaboración con comunidades aliadas, gestión logística tanto en plataformas digitales como en espacios físicos, y difusión para llegar a un público diverso y amplio.",
    media: [
      { kind: "image", src: img3, alt: "Charla tecnológica en evento comunitario" },
      { kind: "image", src: img4, alt: "Asistentes participando en taller de tecnología" },
    ],
  },

  // 6. Data Match
  {
    id: "evt-data-match-2025",
    title: "Data Match – Conectando talento con oportunidades en datos",
    dateISO: "2025-08-01",
    venue: "",
    city: "Medellín",
    tags: ["Datos", "Empleabilidad", "Networking"],
    descShort:
      "Evento gratuito enfocado en conectar talento del ecosistema de datos con oportunidades laborales reales.",
    descLong:
      "Fecha: agosto 2025. Data Match es un evento diseñado para conectar talento en datos, ingeniería, ciencia de datos e inteligencia artificial con oportunidades reales de empleo. Con el apoyo de Lovelytics, se facilitaron conexiones directas con 50 vacantes en la industria. Además de charlas y talleres, el evento se consolidó como un espacio de networking entre empresas, comunidades y participantes. El impacto se refleja en empleabilidad, formación actualizada en tendencias de datos y visibilización de talento local. Nuestro rol: planeación y organización integral, diseño de agenda, convocatoria de speakers, coordinación logística, conexión con empresas para abrir vacantes y difusión para asegurar un espacio inclusivo y gratuito.",
    media: [
      { kind: "image", src: img1, alt: "Escenario principal del Data Match" },
      { kind: "image", src: img2, alt: "Asistentes en el área de networking del Data Match" },
    ],
  },

  // 7. Databricks Bootcamp
  {
    id: "evt-databricks-bootcamp-2025",
    title: "Databricks Bootcamp – Capacitación intensiva y empleabilidad",
    dateISO: "2025-09-15",
    venue: "",
    city: "Online",
    tags: ["Databricks", "Big Data", "Bootcamp"],
    descShort:
      "Bootcamp virtual intensivo de 3 días en Databricks, con certificación y proceso de selección laboral.",
    descLong:
      "Fechas: 15 al 17 de septiembre de 2025. Databricks Bootcamp fue un programa intensivo de 3 días completamente virtual y gratuito, organizado por Lovelytics y Tech Community. Se inscribieron 300 personas, de las cuales 200 participaron activamente en las sesiones de formación en big data, cloud y Databricks. El programa incluyó capacitación técnica, evaluaciones prácticas, certificados de asistencia y un challenge técnico que otorgó un segundo certificado de aprobación. Las 20 mejores personas continuaron en un proceso de empleabilidad con Lovelytics. Nuestro rol: diseño académico y operativo del bootcamp, estructuración de contenidos y retos, organización integral del evento virtual, acompañamiento a participantes, gestión de certificados y conexión directa entre talento formado y oportunidades laborales en el ecosistema de datos.",
    media: [
      { kind: "image", src: img2, alt: "Sesión virtual del Databricks Bootcamp" },
      { kind: "image", src: img4, alt: "Participantes siguiendo el bootcamp desde sus equipos" },
    ],
  },
];
