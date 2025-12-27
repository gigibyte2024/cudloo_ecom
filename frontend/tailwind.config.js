/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          display: ["Manrope", "sans-serif"],
        },
        colors: {
          primary: "#f0426e",
  
          "background-light": "#f8f6f6",
          "pastel-blue": "#eef7ff",
          "pastel-pink": "#fff0f5",
  
          /* ✔ FINAL baby pink – visible & premium */
          "baby-pink": "#e7a9bb",
        },
        keyframes: {
          float: {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-15px)" },
          },
          "float-tilt": {
            "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
            "50%": { transform: "translateY(-12px) rotate(-2deg)" },
          },
        },
        animation: {
          float: "float 6s ease-in-out infinite",
          "float-tilt": "float-tilt 7s ease-in-out infinite",
        },
      },
    },
    plugins: [],
  };
  