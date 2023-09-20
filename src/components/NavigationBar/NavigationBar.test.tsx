import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

describe("Navigation Bar", () => {
  it("should contain shortly header svg", () => {
    render(<NavigationBar />);

    const shortlyLogo = screen.getByLabelText("shortly header logo");

    expect(shortlyLogo).toBeInTheDocument();
  });

  it("should contain burger menu icon", () => {
    render(<NavigationBar />);

    const burgerMenuIcon = screen.getByLabelText("burger menu icon");

    expect(burgerMenuIcon).toBeInTheDocument();
  });

  it.each([
    [1, "Features", "Features"],
    [2, "Pricing", "Pricing"],
    [3, "Resources", "Resources"],
    [4, "Login", "Login"],
    [5, "Sign Up", "Sign Up"],
  ])("menu item %i:  %s to equal %s", async (num, item, expected: any) => {
    render(<NavigationBar />);
    expect(screen.getByText(item).textContent).toBe(expected);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Sign Up" })
      ).toBeInTheDocument();
    });
  });

  it("should open mobile menu when burger menu clicked", () => {
    render(<NavigationBar />);

    const burgerMenuIcon = screen.getByLabelText("burger menu icon");

    fireEvent.click(burgerMenuIcon);

    expect(screen.getAllByRole("listitem").length).toBe(5);
  });
});
