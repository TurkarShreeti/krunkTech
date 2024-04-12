module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          400: "#b1b1b1",
          500: "#939393",
          600: "#727272",
          700: "#666666",
          "100_02": "#eef3fc",
          "50_02": "#f2f7ff",
          "50_01": "#f6f9ff",
          "100_01": "#f4f4f4",
        },
        light_green: { 100: "#dcf7c5", A700: "#3fe224" },
        blue: { 50: "#e2ecff", A200: "#4c82ef" },
        blue_gray: { 400: "#7a7f8c", 900: "#333333" },
      },
      boxShadow: { xs: "0px 1px 4px 0px #000000" },
      fontFamily: { poppins: "Poppins" },
      backgroundImage: {
        gradient: "linear-gradient(138deg, #e6eeff,#e6eeff00)",
        gradient1: "radial-gradient(228deg, #ffffff,#e2e1e100)",
        gradient2: "linear-gradient(164deg, #eff3fd,#eff3fd00)",
        gradient3: "linear-gradient(141deg, #e5edff,#ffffff)",
        gradient4: "linear-gradient(152deg, #e5edff,#f9fbff)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
