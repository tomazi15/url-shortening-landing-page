import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavigationBar from "./NavigationBar";

describe("Navigation Bar", () => {
  it("should open navigation menu", () => {
    render(<NavigationBar />);

    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();

    userEvent.click(menuButton);
  });
});
