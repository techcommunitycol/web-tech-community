import type { WhatWeDoItem } from "../types";

export const WHAT_WE_DO_ITEMS: WhatWeDoItem[] = [
  {
    slug: "eventos-y-talleres",
    title: "Eventos y talleres",
    desc: "Charlas técnicas y workshops para aprender haciendo.",
    details: {
      problem: "La comunidad necesita espacios prácticos y consistentes para aprender y practicar.",
      solution: [
        "Workshops hands-on con retos guiados.",
        "Charlas con demos en vivo y repos compartidos.",
        "Katas y labs con feedback entre pares."
      ],
      outcomes: [
        "Mejora de habilidades aplicadas.",
        "Repositorio de contenidos reutilizable.",
        "Crecimiento de mentores locales."
      ],
      tech: ["React", "Node.js", "Python", "GitHub Actions", "Vite", "Tailwind"]
    }
  },
  {
    slug: "intercambios-de-idiomas",
    title: "Intercambios de idiomas",
    desc: "Intercambios de idiomas mensuales para aprender juntos y hacer nuevas conexiones.",
    details: {
      problem:
        "Las personas quieren practicar idiomas de forma constante, pero no encuentran espacios seguros, guiados y accesibles.",
      solution: [
        "Intercambios de idiomas mensuales con grupos pequeños.",
        "Mesas organizadas por nivel (básico, intermedio, avanzado) con moderadores.",
        "Dinámicas guiadas: ice-breakers, role plays y temas de conversación preparados."
      ],
      outcomes: [
        "Mayor confianza y fluidez al hablar en otro idioma.",
        "Red de contactos internacionales y nuevas amistades.",
        "Hábito de práctica mensual dentro de una comunidad segura."
      ],
      tech: ["WhatsApp", "Google Forms", "Notion", "Canva", "Google Meet / Zoom"]
    }
  },
  {
    slug: "mentorias-y-paneles",
    title: "Mentorías y paneles",
    desc: "Conecta con referentes de la industria.",
    details: {
      problem: "Hay brecha entre talento emergente y referentes con experiencia.",
      solution: [
        "Matchmaking mentor–mentee con sesiones 1:1.",
        "Paneles temáticos con Q&A estructurado.",
        "Rutas de carrera y plan de aprendizaje."
      ],
      outcomes: [
        "Mentorías sostenibles y medibles.",
        "Portafolios reales y networking efectivo.",
        "Mayor empleabilidad."
      ],
      tech: ["Calendly/ICS", "Notion/Docs", "Stream/Meet", "Formularios"]
    }
  },
  {
    slug: "alianzas-y-comunidad",
    title: "Alianzas y comunidad",
    desc: "Colaboramos con más comunidades para ampliar el impacto.",
    details: {
      problem: "Los esfuerzos están fragmentados y se duplican recursos.",
      solution: [
        "Agenda unificada de eventos (calendario público).",
        "Canales de difusión y PR conjuntos.",
        "Repositorios y plantillas compartidas."
      ],
      outcomes: [
        "Mayor alcance y asistencia.",
        "Material centralizado y versionado.",
        "Sponsors con retorno real."
      ],
      tech: ["iCal", "Zapier/Make", "GitHub", "Analytics", "SEO"]
    }
  }
];
