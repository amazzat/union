const { configure, presets } = require("eslint-kit");

module.exports = configure({
  presets: [
    presets.imports({
      groups: [["^\\u0000"], ["^@"], ["^\\."]],
    }),
    presets.typescript(),
    presets.node(),
    presets.react(),
    presets.nextJs(),
    presets.prettier(),
  ],
  extend: {
    rules: {
      "react/destructuring-assignment": "off",
    },
  },
});
