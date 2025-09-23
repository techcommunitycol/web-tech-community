import logoGdg from "../../assets/logoGdg.jpg";
import logoPioneras from "../../assets/logoPioneras.png";
import logoWtm from "../../assets/logoWtm.png";

export const ALLIES = [
  {
    name: "GDG Medellín",
    url: "https://gdg.community.dev/",
    logo: logoGdg,
    desc: "Capítulo local de Google Developer Groups: charlas, codelabs y networking para devs.",
  },
  {
    name: "Pioneras Dev",
    url: "https://www.pionerasdev.org/",
    logo: logoPioneras,
    desc: "Comunidad que impulsa a mujeres en tecnología con mentorías y formación continua.",
  },
  {
    name: "Women Techmakers",
    url: "https://www.womentechmakers.com/",
    logo: logoWtm,
    desc: "Programa global que visibiliza y apoya a mujeres en tecnología.",
  },
] as const;
