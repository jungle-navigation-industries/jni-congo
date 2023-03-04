import { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";
import { TitleSize } from "./TitleSize";

const meta: Meta<typeof Title> = {
  title: "Elements/Title",
  component: Title,
};

export default meta;

export const SizeOne: StoryObj<typeof Title> = {
  args: {
    title: "Size One",
    titleSize: TitleSize.One,
  },
};
