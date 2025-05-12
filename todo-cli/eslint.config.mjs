// eslint.config.mjs
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginNode from "eslint-plugin-node";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: eslintPluginPrettier,
      node: eslintPluginNode,
    },
    rules: {
      "prettier/prettier": "error",
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
