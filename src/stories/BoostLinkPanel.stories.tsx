import type { Meta, StoryObj } from "@storybook/react";
import BoostLinkPanel from "../components/BoostLinkPanel/BoostLinkPanel";

const meta: Meta<typeof BoostLinkPanel> = {
  title: "All Components/Boost Link Panel",
  component: BoostLinkPanel,
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
