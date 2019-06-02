import React from "react";
import { shallow } from "enzyme";

import Hello from "components/Hello";

test("Hello should exist", (): boolean =>
  expect(shallow(<Hello title="test" />).exists()).toBe(true));
