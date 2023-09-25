import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils.tsx";
import UrlList from "./UrlList";

describe("Url List", () => {
  const initialUrl = { userUrl: [{ userUrl: "http://test.com", id: 15 }] };

  it("should render url card", () => {
    renderWithProviders(<UrlList />, { preloadedState: { urls: initialUrl } });

    const originalUrl = screen.getByText("http://test.com");
    expect(originalUrl).toBeInTheDocument();

    const fakeShortenUrl = screen.getByText("Mock shorten url");
    expect(fakeShortenUrl).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /copy/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const copiedButton = screen.getByRole("button", { name: /copied!/i });
    expect(copiedButton).toBeInTheDocument();
  });
});
