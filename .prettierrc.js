module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  blacketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'auto',
  'editor.FormatOnSave': true,
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[typescript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  "plugins": ["prettier-plugin-tailwindcss"]
};
