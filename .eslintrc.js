module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/base'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: '2017',
    sourceType: 'module'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-body-style': [2, 'as-needed'],
    'class-methods-use-this': 2,
    'comma-dangle': [2, 'never'],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'max-len': 0,

    // eslint-disable-next-line
    'linebreak-style': ['error', (require('os').EOL === '\r\n' ? 'windows' : 'unix')],
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-use-before-define': 1,
    'prefer-template': 2,
    'prefer-const': [
      2,
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
