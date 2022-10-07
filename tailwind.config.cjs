/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        944: "42rem",
      },
      fontSize: {
        small: ["14px", "17px"],
        p: ["16px", "20px"],
        h4: ["21px", "26px"],
        button: ["18px, 24px"],
        mdP: ["20px", "25px"],
        mdH4: ["28px", "35px"],
      },
      fontFamily: {
        cabinet: ["Cabinet Grotesk", "sans-serif"],
        lato: ["Lato", "sans-sarif"],
        Campton: ["Campton", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#E7E9F8",
          100: "#C5CBEF",
          200: "#98A2E3",
          300: "#6877D5",
          400: "#3A4EC9",
          500: "#0F27BD",
          600: "#0D21A1",
          700: "#0B1C86",
          800: "#09166C",
          900: "#071255",
        },
        neutral: {
          50: "#fafafb",
          100: "#f1f1f4",
          200: "#e3e4e9",
          300: "#d5d6de",
          400: "#C7C8D3",
          500: "#A1A4B6",
          600: "#717591",
          700: "#4b4e61",
          800: "#252730",
          900: "#131418",
        },
        secondary: {
          50: "#FEF1E6",
          100: "#FCDDC3",
          200: "#F9C294",
          300: "#F6A662",
          400: "#F48B32",
          500: "#F17105",
          600: "#CD6004",
          700: "#AB5004",
          800: "#894003",
          900: "#6C3302",
        },
        success: {
          50: "#E7F8EB",
          100: "#C5EFD0",
          200: "#98E3AB",
          300: "#68D584",
          400: "#3AC95E",
          500: "#0FBD3B",
          600: "#0DA132",
          700: "#0B862A",
          800: "#096C22",
          900: "#07551B",
        },
        error: {
          50: "#FBE7E7",
          100: "#F5C6C6",
          200: "#ED9999",
          300: "#E46969",
          400: "#DC3C3C",
          500: "#D41111",
          600: "#B40E0E",
          700: "#970C0C",
          800: "#790A0A",
          900: "#5F0808",
        },
        warning: {
          50: "#FCFBE6",
          100: "#F7F5C3",
          200: "#F1ED94",
          300: "#EBE463",
          400: "#E5DC34",
          500: "#DFD407",
          600: "#BEB406",
          700: "#9E9705",
          800: "#7F7904",
          900: "#645F03",
        },
      },
    },
  },
  plugins: [],
};
