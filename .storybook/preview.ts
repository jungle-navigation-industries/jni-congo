import type { Preview } from "@storybook/react";
import "../src/styles/index.scss";
import { withTests } from "@storybook/addon-jest";
import results from "../coverage/.jest-test-results.json";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withTests({ results })],
};

export default preview;
