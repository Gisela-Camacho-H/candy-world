import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {        
          "primary": "#00a398",       
          "secondary": "#7dd3fc",     
          "accent": "#a78bfa",          
          "neutral": "#123432",         
          "base-100": "#0f3037",
          "info": "#d6d3d1",
          "success": "#6ee7b7",
          "warning": "#ecfccb",
          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
