module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    // standard를 불러오지 못해 "plugin:"을 붙여 다시 설정하니 됨.
    "standard",
    "plugin:vue/recommended"
  ],
  plugins: [
    "html",
    "standard",
    "vue"
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-dubugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}