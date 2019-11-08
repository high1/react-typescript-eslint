import React from "react";
import { render } from "@testing-library/react";

import Hello from "components/Hello";

test("Hello should exist", (): void => {
  const testMessage = "Test Message";
  const { getByText } = render(<Hello title={testMessage} />);
  expect(getByText(testMessage)).toBeInTheDocument();
});
