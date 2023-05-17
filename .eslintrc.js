module.exports = {
  env: {
    node: true,
    // commonjs: true,
    // es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    'linebreak-style': ['error', 'windows'],
  },
};
