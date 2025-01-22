import globals from "globals";
import jsPlugin from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
const config = {
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    parser: tsParser,
    globals: {
      ...globals.node,
    },
  },
  plugins: {
    "@typescript-eslint": tsPlugin,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "prefer-const": "error",
    "no-console": "warn",
    "no-undef": "error",
    "@typescript-eslint/no-require-imports": "error",
  },
  ignorePatterns: ["node_modules", "dist"],
};

export default config;
