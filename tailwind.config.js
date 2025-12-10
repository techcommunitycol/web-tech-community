/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
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
        primary: "#36979C",
        "primary-dark": "#36979C",
        gray: {
          900: "#111111",
          600: "#5A6063",
          300: "#B4BBBF",
          200: "#DCE1E4",
        },
      },
    },
  },
  plugins: [],
}
