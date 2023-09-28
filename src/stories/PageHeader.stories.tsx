import type { Meta, StoryObj } from "@storybook/react";
import PageHeader from "../components/PageHeader/PageHeader";

const meta: Meta<typeof PageHeader> = {
  title: "All Components/ Page Header",
  component: PageHeader,
  parameters: {
    backgrounds: { default: "dark" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
