printWidth: 80;
tabWidth: 2;
useTabs: false;
semi: true;
singleQuote: false;
trailingComma: "es5";
bracketSpacing: true;
module.exports = {
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "crlf",
  plugins: [require("prettier-plugin-tailwindcss")],
};
