import flowbiteReact from "flowbite-react/plugin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.flowbite-react/**/*.{js,jsx,ts,tsx,json}"
  ],
  theme: {
    extend: {
      colors: {
        // Azules/teal aproximados a tu imagen
        brand: {
          50:  "#E6F6FA", // celeste muy claro
          200: "#A8E1E6", // aqua claro
          300: "#44C3C6", // teal
          400: "#0FA3B1", // teal más profundo
          500: "#7FA1E7", // periwinkle
          600: "#5B84D8", // azul medio
          700: "#0A53B5", // azul royal
          800: "#0A49A5", // azul intenso
          900: "#083D8A", // azul oscuro
        },
      },
    },
  },
  plugins: [flowbiteReact],
}