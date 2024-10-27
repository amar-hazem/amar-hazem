/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ah/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  root: true,
};
