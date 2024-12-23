/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    screens: {
      xsm: "430px",
      // => @media (min-width: 640px) { ... }
    },
    extend: {},
  },

  plugins: [],
};
