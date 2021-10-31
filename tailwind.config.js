module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
