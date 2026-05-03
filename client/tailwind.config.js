export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        sans: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        off: "#FAFAF9",
        neutralx: "#F5F5F3",
        ink: "#0A0A0A",
        grayx: "#6B7280",
        grayx2: "#374151",
        borderx: "#E5E5E3",
        accent: "#0066FF",
        accent2: "#0052CC",
        tealx: "#0D9488",
        successx: "#10B981",
      },
      boxShadow: {
        softBlue: "0 8px 32px rgba(0,102,255,.10)",
        hero: "0 40px 100px rgba(0,0,0,.10), 0 0 0 1px rgba(0,0,0,.05)"
      }
    },
  },
  plugins: [],
};
