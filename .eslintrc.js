module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-unused-expressions": "off",
    "eol-last":'never',
    "no-trailing-spaces":'off',
    '@typescript-eslint/no-unused-vars':"off",
    'space-before-function-paren': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/interface-name-prefixed': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off'
  }
}
