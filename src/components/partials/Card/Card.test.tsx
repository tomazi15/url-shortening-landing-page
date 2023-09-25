import { render, screen } from "@testing-library/react";
import Card from "./Card";
import {
  mockCardData,
  mockLogo,
  mockCardTitle,
  mockCardDescription,
} from "./Card.fixtures";

describe("Card", () => {
  it("should render card svg", () => {
    render(<Card cardData={mockCardData} />);

    const cardLogo = screen.getByLabelText(mockLogo);
    expect(cardLogo).toBeInTheDocument();
  });

  it("should render card title", () => {
    render(<Card cardData={mockCardData} />);

    const cardTitle = screen.getByText(mockCardTitle);
    expect(cardTitle).toBeInTheDocument();
  });

  it("should render card description", () => {
    render(<Card cardData={mockCardData} />);

    const cardDescription = screen.getByText(mockCardDescription);
    expect(cardDescription).toBeInTheDocument();
  });
});
