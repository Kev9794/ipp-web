/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        title: ["26px", { fontWeight: 700 }],
        button: ["18px", { fontWeight: 700 }],
        subtitleBold: ["16px", { fontWeight: 700 }],
        subtitle: ["16px", { fontWeight: 400 }],
        paragraphBold: ["14px", { fontWeight: 700 }],
        paragraph: ["14px", { fontWeight: 400 }],
        smallParagraphBold: ["12px", { fontWeight: 700 }],
        smallParagraph: ["12px", { fontWeight: 500 }],
        heading1: ["48px", { fontWeight: 700 }],
        heading2: ["36px", { fontWeight: 700 }],
        heading3: ["28px", { fontWeight: 700 }],
        heading4: ["20px", { fontWeight: 700 }],
        heading5: ["20px", { fontWeight: 500 }],
        heading6: ["16px", { fontWeight: 500 }],
        paragraph1: ["20px", { fontWeight: 500 }],
        paragraph2: ["20px", { fontWeight: 400 }],
        paragraph3: ["18px", { fontWeight: 700 }],
        paragraph4: ["18px", { fontWeight: 500 }],
        paragraph5: ["18px", { fontWeight: 400 }],
        paragraph6: ["16px", { fontWeight: 700 }],
        paragraph7: ["16px", { fontWeight: 500 }],
        paragraph8: ["16px", { fontWeight: 400 }],
        paragraph9: ["14px", { fontWeight: 500 }],
        paragraph10: ["14px", { fontWeight: 400 }],
        heading1Res: ["28px", { fontWeight: 700 }],
        heading2Res: ["24px", { fontWeight: 700 }],
        heading3Res: ["20px", { fontWeight: 700 }],
        heading4Res: ["18px", { fontWeight: 700 }],
        heading5Res: ["12px", { fontWeight: 500 }],
        paragraph1Res: ["16px", { fontWeight: 700 }],
        paragraph2Res: ["16px", { fontWeight: 500 }],
        paragraph3Res: ["16px", { fontWeight: 400 }],
        paragraph4Res: ["14px", { fontWeight: 700 }],
        paragraph5Res: ["14px", { fontWeight: 500 }],
        paragraph6Res: ["14px", { fontWeight: 400 }],
        paragraph7Res: ["12px", { fontWeight: 700 }],
        paragraph8Res: ["12px", { fontWeight: 500 }],
        paragraph9Res: ["12px", { fontWeight: 400 }],
        paragraph10Res: ["10px", { fontWeight: 500 }],
        paragraph11Res: ["10px", { fontWeight: 400 }],
      },
      colors: {
        primary: "#B52E36",
        red10: "#6E1A1D",
        red20: "#922128",
        red30: "#C83039",
        red40: "#C0394C",
        red50: "#CA3C41",
        red60: "#E4232C",
        red70: "#E21f1C",
        secondary: "#332B2B",
        grey: "#F6F6F6",
        grey2: "#99A0A8",
        neutral: "#EFF0F6",
        greyBackground: "#F7F9FB",
        textBlack: "#313131",
        textGrey: "#99A0A8",
        textDarkGrey: "#A8A9B0",
      },
      boxShadow: {
        buttonShadow:
          "0px 4px 15px 0px rgba(35, 167, 135, 0.30)",
        defaultShadow:
          "0px 0px 24px 0px rgba(0, 0, 0, 0.1)",
      },
      padding: {
        custom10px: "10px",
      },
      animation: {
        sliderTrack: "scroll 40s linear infinite",
        sliderTrackReverse:
          "scroll 40s linear infinite reverse",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-266px * 7))",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar"),
    nextui(),
  ],
};
