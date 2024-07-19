/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: `rgba(21, 21, 21, 1)`,
        navBlack: `rgba(0, 0, 0, 0.2)`,
        navBorder: `rgba(104, 129, 255, 1)`,
        border: `rgba(104, 129, 255, 1)`,
        button: `rgba(106, 53, 255, 1)`,
        AI: `rgba(127, 147, 255, 1)`,
        light: `rgba(16, 28, 92, 0.64)`,
        light2: `rgba(16, 28, 92, 0.24)`,
      },

      backgroundImage: {
        "custom-image": "url('./assets/Rectangle 9.svg')",
      },
      fontSize: {
        sm: [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "400",
            letterSpacing: "-0.01em",
            color: "rgba(228, 230, 242, 1)",
          },
        ],
      },
      textColor: {
        custum: `rgba(228, 230, 242, 1)`,
        bigFont: `rgba(255, 255, 255, 1)`,
        custum1: `rgba(192, 194, 204, 1)`,
      },
      fontFamily: {
        Inter: [`Outfit`],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-gradient": {
          background:
            "linear-gradient(90deg, #1C1C1C 0%, #E3E3E3 50.1%, #1C1C1C 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
