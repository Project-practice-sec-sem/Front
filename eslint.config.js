import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import * as eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      '@eslint/js': js,
      prettier: eslintPluginPrettier
    },
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      ...js.configs.recommended.rules,
      'prettier/prettier': 'error'
    }
  },

  pluginReact.configs.recommended
];
