/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      xsm: "1000px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {
      scale: {
        85: ".85",
        80: ".80",
      },
    },
  },

  plugins: [],
};
