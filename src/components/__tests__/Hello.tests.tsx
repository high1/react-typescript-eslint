import React from "react";
import { shallow } from "enzyme";

import Hello from "components/Hello";

test("should return false given external link", (): boolean =>
  expect(shallow(<Hello />).exists()).toBe(true));
