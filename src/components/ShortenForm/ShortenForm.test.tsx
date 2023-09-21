import { fireEvent, screen, waitFor } from "@testing-library/react";
import ShortenForm from "./ShortenForm";
import { renderWithProviders } from "../../utils/test-utils.tsx";

describe("Shorten Form", () => {
  it("should contain input", () => {
    renderWithProviders(<ShortenForm />);

    const formInput = screen.getByRole("textbox", { name: /shorten url/i });
    expect(formInput).toBeInTheDocument();
  });
  it("should contain button", () => {
    renderWithProviders(<ShortenForm />);

    const formButton = screen.getByRole("button", { name: /shorten it!/i });
    expect(formButton).toBeInTheDocument();
  });

  describe("Shorten Form error", () => {
    it("should display error message when empty input submitted", async () => {
      renderWithProviders(<ShortenForm />);

      const formButton = screen.getByRole("button", { name: /shorten it!/i });
      fireEvent.click(formButton);

      await waitFor(() => {
        expect(screen.getByText("Please enter valid url")).toBeInTheDocument();
      });
    });
  });
});
