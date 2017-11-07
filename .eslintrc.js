module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  // https://eslint.org/docs/developer-guide/shareable-configs
  rules: {
    quotes: [2, "double"];
  }
  globals: {}
}
