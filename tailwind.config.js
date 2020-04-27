const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    // Replaces default settings or add new settings
    container: {
      center: true,
    },
    // Extends default settings
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodybg: "var(--color-bodybg)",
        muted: "var(--color-muted)",
        bodytext: "var(--color-bodytext)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        links: "var(--color-links)",
        focus: "var(--color-focus)",
      },
    },
  },
  variants: {
    backgroundColor: ["hover", "focus"],
    borderColor: ["hover", "focus"],
    textColor: ["hover", "focus"],
  },
  plugins: [
    require("@tailwindcss/ui"), // https://tailwindui.com/components
    require('@tailwindcss/custom-forms'), //https://tailwindcss-custom-forms.netlify.app/
  ],
};
