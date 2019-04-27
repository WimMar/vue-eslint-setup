# Vue-eslint-setup

ESlint &amp; Prettier &amp; Babel setup, for use with Vue CLI 3.

## Features

* Lint javascript
* Fixes formatting errors
* Auto remove comments in production code

## Usage
* Installation:
```
npx install-peerdeps --dev @wimmar/eslint-config-vue
```

* Add to your *.eslintrc.js*:
``` 
module.exports = {
  "extends": [
    "@wimmar/eslint-config-vue"
  ]
}
``` 

* Package.json scripts:
```json
"scripts": {
  "lint": "vue-cli-service lint"
},
```