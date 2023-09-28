import type { Meta, StoryObj } from "@storybook/react";
import ProductCard from "../components/ProductCard/ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "All Components/ Product Card",
  component: ProductCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
