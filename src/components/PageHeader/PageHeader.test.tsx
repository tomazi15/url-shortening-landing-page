import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";
import {
  pageHeaderButtonName,
  pageHeaderParagraph,
  pageHeaderTitle,
} from "./PageHeader.fixtures";

describe("Page header", () => {
  it("should render all elements", () => {
    render(<PageHeader />);

    const pageTitle = screen.getByText(pageHeaderTitle);
    expect(pageTitle).toBeInTheDocument();

    const pageParagraph = screen.getByText(pageHeaderParagraph);
    expect(pageParagraph).toBeInTheDocument();

    const pageButton = screen.getByRole("button", {
      name: pageHeaderButtonName,
    });
    expect(pageButton).toBeInTheDocument();
  });
});
