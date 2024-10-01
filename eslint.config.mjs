import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,  // Define os globals específicos para o navegador
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Inclui as regras recomendadas do ESLint para JS
      ...pluginReact.configs.flat.recommended.rules, // Inclui as regras recomendadas do ESLint para React
    },
  },
];
