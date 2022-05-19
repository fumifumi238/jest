import React from "react";
import { render } from "@testing-library/react";

import Sample from "../Sample";

describe("App", () => {
  test("renders App component", () => {
    const { debug } = render(<Sample />);
    // package.json に設定を書いて回避。
    debug();
  });
});
