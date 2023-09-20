import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import {
  productCardDescription,
  productCardTitle,
} from "./ProductCard.fixtures";

describe("Product Card", () => {
  it("should render title", () => {
    render(<ProductCard />);

    const title = screen.getByText(productCardTitle);
    expect(title).toBeInTheDocument();
  });

  it("should render description", () => {
    render(<ProductCard />);

    const description = screen.getByText(productCardDescription);
    expect(description).toBeInTheDocument();
  });

  it.each([
    [1, "Fully Customizable"],
    [2, "Detailed Records"],
    [3, "Brand Recognition"],
  ])("card %i:  %s to be within product card", async (num, item) => {
    render(<ProductCard />);
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});
