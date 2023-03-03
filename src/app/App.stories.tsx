import { Meta, StoryObj } from "@storybook/react";
import App from "./App";

const meta: Meta<typeof App> = {
  title: "App",
  component: App,
};

export default meta;

export const Primary: StoryObj<typeof App> = {
  render: () => <App />,
};
