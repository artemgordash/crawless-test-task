module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'indent': ['warn', 2],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'object-curly-spacing': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        'extendDefaults': true,
        'types': {
          '{}': false,
        },
      },
    ],
    'react/jsx-first-prop-new-line': ['warn', 'multiline'],
    'react/jsx-max-props-per-line': ['warn',
      {
        'maximum': {
          'single': 1,
          'multi': 1,
        },
      }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-indent': [2, 2],
    'react/jsx-no-useless-fragment': ['warn', {
      allowExpressions: true,
    }],
    'react/jsx-one-expression-per-line': ['warn',
      {
        'allow': 'single-child',
      }],
    'react/jsx-curly-newline': ['warn',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      }],
    'react/jsx-curly-brace-presence': ['warn',
      {
        props: 'always',
        children: 'never',
      }],
    'react/jsx-tag-spacing': ['warn',
      {
        'beforeClosing': 'proportional-always',
        'beforeSelfClosing': 'proportional-always',
      }],
    'react/self-closing-comp': ['warn',
      {
        'component': true,
        'html': true,
      }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'comma-dangle': [
      'warn', 'always-multiline',
    ],
  },
};
