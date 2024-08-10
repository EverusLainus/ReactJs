import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button"; // Adjust the path as necessary

describe("Button Component", () => {
  test("renders the button with children text", () => {
    render(<Button>Click Me</Button>);

    // Check if the button is rendered with the correct text
    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click Me</Button>);

    const buttonElement = screen.getByText("Click Me");

    // Simulate a click event
    fireEvent.click(buttonElement);

    // Check if the onClick function was called
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
