import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const meta: Meta<typeof NavigationBar> = {
  title: "All Components/ Navigation Bar",
  component: NavigationBar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
