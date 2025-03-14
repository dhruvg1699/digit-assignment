module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: { enabled: true, content: ["./example/index.html"] },
  theme: {
    screens: {
      dt: "780px",
      sm: { max: "425px" },
    },
    colors: {
      primary: {
        light: "#F18F5E",
        main: "#c84c0e",
        dark: "#C8602B",
      },
      secondary: "#22394D",
      text: {
        primary: "#0B0C0C",
        secondary: "#505A5F",
      },
      link: {
        normal: "#1D70B8",
        hover: "#003078",
      },
      border: "#D6D5D4",
      inputBorder: "#464646",
      "input-border": "#464646",
      focus: "#c84c0e",
      error: "#D4351C",
      success: "#00703C",
      black: "#000000",
      grey: {
        dark: "#9E9E9E",
        mid: "#EEEEEE",
        light: "#FAFAFA",
        bg: "#E3E3E3",
      },
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      rc: ['"Roboto Condensed"', "sans-serif"],
    },
    fontSize: {
      "heading-xl-dt": ["48px", "56px"],
      "heading-xl": ["32px", "40px"],
      "heading-l-dt": ["36px", "40px"],
      "heading-l": ["24px", "32px"],
      "heading-m-dt": ["24px", "32px"],
      "heading-m": ["18px", "28px"],
      "heading-s": ["16px", "24px"],
      "caption-xl-dt": ["27px", "32px"],
      "caption-xl": ["18px", "26px"],
      "caption-l-dt": ["24px", "28px"],
      "caption-l": ["18px", "21px"],
      "caption-m-dt": ["19px", "23px"],
      "caption-m": ["16px", "19px"],
      "form-field": ["16px", "20px"],
      "body-l-dt": ["19px", "28px"],
      "body-l": ["16px", "24px"],
      "body-s-dt": ["16px", "24px"],
      "body-s": ["14px", "16px"],
      legend: ["19px", "23px"],
      link: ["16px", "24px"],
      "text-btn": ["16px", "24px"],
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    padding: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "36px",
    },
    margin: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "64px",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "1px",
      4: "4px",
      10: "10px",
    },
    boxShadow: {
      card: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
      radiobtn: "0 0 0 5px #c84c0e",
    },
    inset: {
      0: 0,
      6: "6px",
      10: "10px",
    },
    extend: {},
    digitv2: {
      lightTheme: {
        primary: "#c84c0e",
        "text-color-primary": "#0B0C0C",
        "text-color-secondary": "#505A5F",
        "text-color-disabled": "#B1B4B6",
        background: "#EEEEEE",
        paper: "#FFFFFF",
        "paper-secondary": "#FAFAFA",
        divider: "#D6D5D4",
        "header-sidenav": "#0B4B66",
        "input-border": "#505A5F",
        "primary-bg": "#FEEFE7",
      },
      alert: {
        error: "#D4351C",
        "error-bg": "#EFC7C1",
        success: "#00703C",
        "success-bg": "#BAD6C9",
        info: "#3498DB",
        "info-bg": "#C7E0F1",
      },
      chart: {
        "chart-1": "#048BD0",
        "chart-1-gradient": "#048BD0",
        "chart-2": "#FBC02D",
        "chart-2-gradient": "#FBC02D",
        "chart-3": "#8E29BF",
        "chart-4": "#EA8A3B",
        "chart-5": "#0BABDE",
      },
      fontSize: {
        "heading-xl": {
          mobile: "2rem",
          tablet: "2.25rem",
          desktop: "2.5rem",
        },
        "heading-l": {
          mobile: "1.5rem",
          tablet: "1.75rem",
          desktop: "2rem",
        },
        "heading-m": {
          mobile: "1.25rem",
          tablet: "1.375rem",
          desktop: "1.5rem",
        },
        "heading-s": {
          mobile: "1rem",
          tablet: "1rem",
          desktop: "1rem",
        },
        "heading-xs": {
          mobile: "0.75rem",
        },
        "caption-l": {
          mobile: "1.5rem",
          tablet: "1.75rem",
          desktop: "1.75rem",
        },
        "caption-m": {
          mobile: "1.25rem",
          tablet: "1.5rem",
          desktop: "1.5rem",
        },
        "caption-s": {
          mobile: "1rem",
          tablet: "1.25rem",
          desktop: "1.25rem",
        },
        "body-l": {
          mobile: "1rem",
          tablet: "1.25rem",
          desktop: "1.25rem",
        },
        "body-s": {
          mobile: "0.875rem",
          tablet: "1rem",
          desktop: "1rem",
        },
        "body-xs": {
          mobile: "0.75rem",
          tablet: "0.875rem",
          desktop: "0.875rem",
        },
        label: {
          mobile: "1rem",
          tablet: "1rem",
          desktop: "1rem",
        },
        link: {
          mobile: "1rem",
          tablet: "1rem",
          desktop: "1rem",
        },
      },
      fontFamily: {
        sans: ["Roboto"],
        rc: ['"Roboto Condensed"'],
      },
      fontStyle: {
        normal: "normal",
        italic: "italic",
      },
      textDecorationLine: {
        underline: "underline",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        "line-height-body-l": { mobile: "1.5rem", tablet: "1.75rem", desktop: "1.75rem" },
        "line-height-body-s": { mobile: "1.0938rem", tablet: "1.5rem", desktop: "1.5rem" },
        "line-height-body-xs": { mobile: "1.125rem", tablet: "1.5rem", desktop: "1.5rem" },
        normal: "normal",
      },
      screens: {
        mobile: "400px",
        tablet: "768px",
        desktop: "1024px",
      },
    },
  },
  variants: {},
  plugins: [],
};