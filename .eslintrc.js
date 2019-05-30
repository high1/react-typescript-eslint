module.exports = {
  parser: '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', //Uses the recommended rules from @typescript-eslint/eslint-plugin
    'airbnb-typescript',  // Uses the recommended rules from @airbnb-typescript config
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Code is in ECMAScript modules,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'import/no-extraneous-dependencies': ["error", {
      devDependencies:
      [
        "**/__tests__/**",
        "jest.config.js", // jest config
        "webpack.config.ts", // webpack config
        "setupTests.ts" // enzyme config
      ],
    }],
  },
  settings: {
    'import/resolver': {
      'webpack': {},
    },
  },
  env: {
    browser: true,
    jest: true,
  }
};
