import { render, screen } from "@testing-library/react";
import PageFooter from "./PageFooter";

describe("Page Footer", () => {
  it("should contain shortly footer svg", () => {
    render(<PageFooter />);

    const shortlyLogo = screen.getByLabelText("shortly footer logo");

    expect(shortlyLogo).toBeInTheDocument();
  });

  it.each([
    [1, "Features", "Features"],
    [2, "Link Shortening", "Link Shortening"],
    [3, "Branded Links", "Branded Links"],
    [4, "Analytics", "Analytics"],
    [5, "Resources", "Resources"],
    [6, "Blog", "Blog"],
    [7, "Developers", "Developers"],
    [8, "Support", "Support"],
    [9, "Company", "Company"],
    [10, "About", "About"],
    [11, "Our Team", "Our Team"],
    [12, "Careers", "Careers"],
    [13, "Contact", "Contact"],
  ])("menu item %i:  %s to equal %s", async (num, item, expected: any) => {
    render(<PageFooter />);
    expect(screen.getByText(item).textContent).toBe(expected);
  });

  it.each([
    ["facebook icon"],
    ["twitter icon"],
    ["pinterest icon"],
    ["instagram icon"],
  ])("footer icon %s should be in document", async (item) => {
    render(<PageFooter />);
    expect(screen.getByLabelText(item)).toBeInTheDocument();
  });
});
