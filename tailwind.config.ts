/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'
const defaultTheme = require("tailwindcss/defaultTheme");


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#043697",
          secondary: "#2450aa",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#043697",
          secondary: "#2450aa",
        },
      },
    ],
    darkTheme: "dark",
   
  
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root",
   
    // rtl: "false",
  },
  plugins: [require("daisyui")],
}
export default config
