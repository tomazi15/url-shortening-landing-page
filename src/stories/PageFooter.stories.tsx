import type { Meta, StoryObj } from "@storybook/react";
import PageFooter from "../components/PageFooter/PageFooter";

const meta: Meta<typeof PageFooter> = {
  title: "All Components/Page Footer",
  component: PageFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
