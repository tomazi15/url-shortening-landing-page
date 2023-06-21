import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ButtonType } from "../../../types";

describe("Button", () => {
  const buttonProps: ButtonType = {
    name: "foo",
  };

  it("should render button name", () => {
    render(<Button {...buttonProps} />);

    const buttonName = screen.getByText("foo");

    expect(buttonName.textContent).toEqual(buttonProps.name);
  });
});
