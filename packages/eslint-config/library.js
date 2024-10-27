const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "prettier", "turbo"],
  globals: {
    JSX: true,
    React: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "dist/",
    "node_modules/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};
