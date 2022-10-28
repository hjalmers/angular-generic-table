module.exports = {
  stories: [
    "../projects/docs/src/stories/**/*.stories.mdx",
    "../projects/docs/src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-themes",
  ],
  framework: "@storybook/angular",
  staticDirs: ["../.storybook/assets"],
  core: {
    builder: "webpack5",
  },
};