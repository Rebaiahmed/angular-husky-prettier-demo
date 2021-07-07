# AngularHuskyPrettierCode

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{ts,json}": "prettier --write"
  },
  "prettier:check": "prettier --config .prettierrc --check \"src/**/*.{ts,css,html}\"",
  "private": true,
  ```
