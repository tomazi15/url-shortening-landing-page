import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/partials/Button/Button";

const meta: Meta<typeof Button> = {
  title: "All Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Round: Story = {
  args: {
    name: "Round",
    buttonStyle: "round",
  },
};

export const Square: Story = {
  args: {
    name: "Square",
    buttonStyle: "square",
  },
};

export const SmallSquare: Story = {
  args: {
    name: "Small Square",
    buttonStyle: "smallSquare",
  },
};

export const SmallSquareCopy: Story = {
  args: {
    name: "Small Square Copy",
    buttonStyle: "smallSquareCopied",
  },
};
