import { render, screen } from "@testing-library/react";
import BoostLinkPanel from "./BoostLinkPanel";

describe("Boost Link Panel", () => {
  it("should render correct text", () => {
    render(<BoostLinkPanel />);

    const panelText = screen.getByText("Boost your links today");

    expect(panelText).toBeInTheDocument();
  });

  it("should display button", () => {
    render(<BoostLinkPanel />);

    const panelButton = screen.getByRole("button", { name: /get started/i });

    expect(panelButton).toBeInTheDocument();
  });
});
