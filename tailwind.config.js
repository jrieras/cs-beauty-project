export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F1E8",
        sandstone: "#E8D8BE",
        butter: "#F6D46B",
        marigold: "#F2A71B",
        saffron: "#E88922",
        papaya: "#EF7446",
        terracotta: "#B84A32",
        palm: "#4F5D35",
        brown: "#6B3E26",
        cacao: "#3A2418",
      },
      boxShadow: {
        sun: "0 28px 70px rgba(107, 62, 38, 0.18)",
        soft: "0 18px 44px rgba(58, 36, 24, 0.12)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
