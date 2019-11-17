import React from "react";
import { render } from "@testing-library/react";

import Hello from "components/Hello";

test("Text and svg should exist", (): void => {
  const testMessage = "Test Message";
  const { getByText, getByTestId } = render(<Hello title={testMessage} />);
  expect(getByText(testMessage)).toBeInTheDocument();
  expect(getByTestId("svg")).toBeInTheDocument();
});
