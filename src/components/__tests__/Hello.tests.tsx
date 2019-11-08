import React from "react";
import { shallow } from "enzyme";

import Hello from "components/Hello";

test("Hello should exist", (): void =>
  expect(shallow(<Hello title="test" />).exists()).toEqual(true));
