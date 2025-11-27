/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          // Colores de la marca (primarios teal)
          primary: {
            DEFAULT: "#36979C", // núcleo
            medium:  "#57BFC4", // medio tono
            pastel: "#BAE5E7",  // pastel
            soft:   "#CCE9EA",  // tono suave
          },
          // Azules secundarios
          secondary: {
            DEFAULT: "#36979C", // según el manual repite este teal
            medium:  "#2B628C",
            pastel: "#C8D5E0",
            soft:   "#E4EBF1",
          },
          // Escala de grises de la marca
          gray: {
            900: "#111111",
            600: "#5A6063",
            300: "#B4BBBF",
            100: "#DCE1E4",
          },
        },
      },
    },
  },
  plugins: [],
};
