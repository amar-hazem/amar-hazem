/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ah/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  root: true,
};
