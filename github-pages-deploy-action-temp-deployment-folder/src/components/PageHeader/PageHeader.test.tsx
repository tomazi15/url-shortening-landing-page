import { render, screen } from "@testing-library/react";
import PageHeader from "./PageHeader";
import {
  pageHeaderButtonName,
  pageHeaderParagraph,
  pageHeaderTitle,
  pageIllustrationLogo,
} from "./PageHeader.fixtures";

describe("Page header", () => {
  it("should render header illustration", () => {
    render(<PageHeader />);

    const headerLogo = screen.getByLabelText(pageIllustrationLogo);

    expect(headerLogo).toBeInTheDocument();
  });

  it("should render header title", () => {
    render(<PageHeader />);

    const pageTitle = screen.getByText(pageHeaderTitle);
    expect(pageTitle).toBeInTheDocument();
  });

  it("should render header paragraph", () => {
    render(<PageHeader />);

    const pageParagraph = screen.getByText(pageHeaderParagraph);
    expect(pageParagraph).toBeInTheDocument();
  });

  it("should render header button", () => {
    render(<PageHeader />);

    const pageButton = screen.getByRole("button", {
      name: pageHeaderButtonName,
    });
    expect(pageButton).toBeInTheDocument();
  });
});
