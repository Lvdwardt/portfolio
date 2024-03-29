/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    //change font family
    fontFamily: {
      sans: ["var(--font-gotham)"],
      silka: ["var(--font-silka)"],
    },
    extend: {
      maxWidth: {
        320: "320px",
        640: "640px",
        1200: "1200px",
      },
      gridAutoColumns: {
        256: "256px",
      },
      gridAutoRows: {
        256: "256px",
      },
      gridTemplateRows: {
        265: "265px 265px 265px 265px",
      },
      gridTemplateColumns: {
        265: "265px 265px 265px 265px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        //varable colors
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        card: "var(--card)",
        background: "var(--background)",
        text: "var(--text)",
        trans: "var(--trans)",
        lessTrans: "var(--lessTrans)",
        logo: "var(--logo)",
        map: "var(--map)",
      },
      gridTemplateRows: {
        auto: "repeat(auto, minmax(0, 1fr))",
      },
      width: {
        "1/100": "1%",
        "1/50": "2%",
        "3/100": "3%",
        "2/50": "4%",
        "3/50": "6%",
        "4/50": "8%",
        "5/50": "10%",
        "6/50": "12%",
        "7/50": "14%",
        "8/50": "16%",
        "9/50": "18%",
        "10/50": "20%",
        "11/50": "22%",
        "12/50": "24%",
        "13/50": "26%",
        "14/50": "28%",
        "15/50": "30%",
        "16/50": "32%",
        "17/50": "34%",
        "18/50": "36%",
        "19/50": "38%",
        "20/50": "40%",
        "21/50": "42%",
        "22/50": "44%",
        "23/50": "46%",
        "24/50": "48%",
        "25/50": "50%",
        "26/50": "52%",
        "27/50": "54%",
        "28/50": "56%",
        "29/50": "58%",
        "30/50": "60%",
        "31/50": "62%",
        "32/50": "64%",
        "33/50": "66%",
        "34/50": "68%",
        "35/50": "70%",
        "36/50": "72%",
        "37/50": "74%",
        "38/50": "76%",
        "39/50": "78%",
        "40/50": "80%",
        "41/50": "82%",
        "42/50": "84%",
        "43/50": "86%",
        "44/50": "88%",
        "45/50": "90%",
        "46/50": "92%",
        "47/50": "94%",
        "48/50": "96%",
        "49/50": "98%",
        "50/50": "100%",
      },
      animation: {
        loader: "loader 0.6s infinite alternate",
        scale: "scale 1s ease-in infinite",
        fadeIn: "fadeIn 2s ease-in forwards",
        fadeInRight: "fadeInRight 0.6s  ease-in forwards",
        fadeIn48: "fadeIn48 2s ease-in forwards",
        fadeIn46: "fadeIn46 2s ease-in forwards",
        fadeIn38: "fadeIn38 2s ease-in forwards",
        fadeIn30: "fadeIn30 2s ease-in forwards",
        fadeIn15: "fadeIn15 2s ease-in forwards",
        fadeIn50: "fadeIn50 2s ease-in forwards",
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.1,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
        scale: {
          //transform and rotate animation
          "0%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(1.1) rotate(10deg)" },
          "50%": { transform: "scale(1) rotate(0deg)" },
          "75%": { transform: "scale(1.1) rotate(-10deg)" },
          "100%": { transform: "scale(1) rotate(0deg)" },
        },
        fade: {
          "0%": { opacity: 1 },
          "25%": { opacity: 1 },
          "75%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translate-x-10",
          },
          "100%": {
            opacity: 1,
            transform: "translate-x-0",
          },
        },
        fadeIn48: {
          "0%": { width: "0%" },
          "20%": { width: "0%" },
          "100%": { width: "98%" },
        },
        fadeIn46: {
          "0%": { width: "0%" },
          "35%": { width: "0%" },
          "100%": { width: "94%" },
        },
        fadeIn38: {
          "0%": { width: "0%" },
          "50%": { width: "0%" },
          "100%": { width: "75%" },
        },
        fadeIn30: {
          "0%": { width: "0%" },
          "65%": { width: "0%" },
          "100%": { width: "60%" },
        },
        fadeIn15: {
          "0%": { width: "0%" },
          "80%": { width: "0%" },
          "100%": { width: "30%" },
        },
        fadeIn50: {
          "0%": { width: "0%" },
          "70%": { width: "0%" },
          "100%": { width: "50%" },
        },
      },
    },
  },
  variants: {
    scrollbar: ["dark"],
  },
  safelist: [
    "w-[90px] hover:w-[90px] group-hover:[w-[90px] translate-y-[10px] sm:translate-y-0 w-[162px] hover:w-[162px] group-hover:w-[162px] translate-y-[10px] sm:translate-y-[-96px]",
  ],
  plugins: [require("tailwindcss-animated"), require("tailwindcss-animate")],
};
