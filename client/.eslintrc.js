module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  }
}