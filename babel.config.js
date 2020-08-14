module.exports = {
  "plugins": [
    "react-hot-loader/babel",
    ["@babel/plugin-proposal-decorators", { "legacy" : true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-syntax-dynamic-import"
  ],
  "presets": [
    ["@babel/preset-env", { modules: false }],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
