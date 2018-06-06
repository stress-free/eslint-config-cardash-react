module.exports = {
  extendes: 'airbnb-base',
  plugins: [
    'import',
    'react',
  ],
  globals: {
    expect: true,
    window: true,
    document: true,
    jest: true,
    test: true,
    fetch: true,
    process: true,
    localStorage: true,
    navigator: true,

    Cypress: true,
    after: true,
    afterAll: true,
    afterEach: true,
    before: true,
    beforeAll: true,
    beforeEach: true,
    context: true,
    cy: true,
    cypress: true,
    describe: true,
    from: true,
    integration: true,
    it: true,
    tests: true,
  },
  rules: {
    camelcase: [0],
    'comma-dangle': [1, {
      arrays: 'only-multiline',
      objects: 'always',
      imports: 'always',
      exports: 'always',
      functions: 'ignore',
    }],
    'jsx-a11y/no-static-element-interactions': 0,
    semi: [2, 'never'],
    'arrow-body-style': 0,
    quotes: ['error', 'single'],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'], }],
    'no-plusplus': 0,
    'no-param-reassign': [2, { props: false, }],
    'no-mixed-operators': 0,
    'no-continue': 0,
    'react/forbid-prop-types': 0,
}
