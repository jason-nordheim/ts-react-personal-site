import React from "react";
import NavBar from "./NavBar";
import { render, within } from "@testing-library/react";

describe("NavBar", () => {
  test("renders NavBar Component", () => {
    render(<NavBar />);
  });
  test("has a root element of NAV", () => {
    const { container } = render(<NavBar />);
    expect(container.firstElementChild?.tagName).toEqual("NAV");
  });
});
