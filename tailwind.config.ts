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
          "secondary": "#EBC3B6",                   
          "accent": "#f5FBEF",                   
          "neutral": "#654469",                   
          "base-100": "#29182f",                   
          "info": "#7dd3fc",                   
          "success": "#6ee7b7",                   
          "warning": "#ecfccb",                   
          "error": "#f4989c",
                   },
                 },
               ],
             },
  plugins: [require("daisyui")],
};
export default config;
