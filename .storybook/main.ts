// import type { StorybookConfig } from '@storybook/react';
// const config: StorybookConfig = {
//     stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/**/*.stories.@(js|jsx|ts|tsx)'],
//     addons: [
//         '@storybook/addon-links',
//         '@storybook/addon-essentials',
//         '@storybook/addon-interactions',
//         '@storybook/addon-docs',
//     ],
//     framework: {
//         name: '@storybook/react-webpack5',
//         options: {},
//     },
//     docs: {
//         autodocs: true,
//     },
// };
// export default config;

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  // Required
  framework: "@storybook/react-webpack5",
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  // Optional
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-controls",
    "@storybook/nextjs",
  ],
  docs: {
    autodocs: "tag",
  },
};

export default config;
