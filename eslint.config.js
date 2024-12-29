import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  {
    ignores: ["dist", "node_modules", "eslint.config.js", "tailwind.config.js"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2020,
      },
      parserOptions: {
        project: ["tsconfig.json", "tsconfig.node.json", "tsconfig.app.json"],
      },
    },
  },
  {
    files: ["./src/**/*.{ts,tsx}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prefer-const": "error",
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "max-lines": ["warn", { max: 500 }],
      "max-params": ["error", 3],
      "no-explicit-any": "warn",
      "prefer-unknown": "error",
      "explicit-module-boundary-types": "warn",
      "react/prop-types": "off",
      "react/jsx-no-undef": "error",
      "react/jsx-sort-props": ["warn", { callbacksLast: true }],
      "import/no-unresolved": "error",
      "import/named": "error",
      "unicorn/prefer-array-flat": "warn",
      "prefer-await-to-then": "warn",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          semi: true,
          trailingComma: "all",
        },
      ],
    },
  }
);
