import React from "react";
import { render } from "@testing-library/react";
import Register from "./Register";

test("renders Register component", () => {
  const { getByText, getByPlaceholderText } = render(<Register />);
  
  expect(getByPlaceholderText("username")).toBeInTheDocument();
  expect(getByPlaceholderText("password")).toBeInTheDocument();
  expect(getByPlaceholderText("Confirm password")).toBeInTheDocument();
  expect(getByPlaceholderText("Phone")).toBeInTheDocument();
});
