module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/recommended", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": 0,
    "prefer-const": [
      "error",
      {
        destructuring: "all"
      }
    ],
    "no-var": "error",
    "no-await-in-loop": 0,
    "no-return-assign": ["error", "except-parens"],
    "no-unused-vars": [
      1,
      {
        ignoreSiblings: true,
        argsIgnorePattern: "res|next|^err"
      }
    ],
    "arrow-body-style": [2, "as-needed"],
    "no-unused-expressions": [
      2,
      {
        allowTaggedTemplates: true
      }
    ],
    // "no-param-reassign": [
    //   2,
    //   {
    //     props: false
    //   }
    // ],
    "no-restricted-syntax": [
      1,
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "import/prefer-default-export": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "max-len": 0,
    "import/extensions": 0,
    "no-underscore-dangle": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "vue/html-indent": 0,
    "vue/attributes-order": 0,
    "vue/order-in-components": 0,
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5,
        multiline: {
          max: 5,
          allowFirstLine: true
        }
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};