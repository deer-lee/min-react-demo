module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    // "jquery": true
    "jest": true
  },
   parser: "babel-eslint",
  "parserOptions": {
    "sourceType": 'module',
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "globals": {
    "wx": "readonly",
    "routes": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "settings": {
    "react": {
      "version": "detect" // 自动读取已安装的react版本
    }
  },
  "plugins": ["react"],
  "rules": {
    "react/prop-types": "off",
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-extra-semi": 0, // 禁止不必要的分号
    "quotes": ['error', 'single'], // 强制使用单引号
    "no-unused-vars": 0 // 不允许未定义的变量
    // ...你自己的配置
  }
};
