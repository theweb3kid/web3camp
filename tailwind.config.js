/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#141238",
          "200": "rgba(0, 0, 0, 0.08)",
          "300": "rgba(0, 0, 0, 0.05)",
          "400": "rgba(255, 255, 255, 0.8)",
          "500": "rgba(255, 255, 255, 0.7)",
        },
        lavender: "#ebe6fa",
        black: "#000",
        mediumslateblue: {
          "100": "#825cf6",
          "200": "rgba(130, 92, 246, 0.1)",
        },
        darkslateblue: {
          "100": "#46348f",
          "200": "#17143c",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        poppins: "Poppins",
        "source-sans-pro": "'Source Sans Pro'",
        "open-sans": "'Open Sans'",
        bitter: "Bitter",
      },
      borderRadius: {
        "21xl": "40px",
        "3xs": "10px",
        "81xl": "100px",
      },
    },
    fontSize: {
      "13xl": "32px",
      base: "16px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
      "5xl": "24px",
      "29xl": "48px",
      "45xl": "64px",
      "138xl": "157px",
      lg: "18px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
