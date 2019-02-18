module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          test: "./test",
          underscore: "lodash"
        }
      }
    ]
  ]
};
