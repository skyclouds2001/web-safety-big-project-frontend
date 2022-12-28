module.exports = {
  root: true,
  customSyntax: 'postcss-html',
  extends: ['stylelint-config-standard', 'stylelint-config-html', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'function', 'if', 'each', 'include', 'mixin'],
      },
    ],
    'no-empty-source': false,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
}
