import React from "react";
import { render, screen } from "@testing-library/react";

import Sample from "../Sample";

describe("App", () => {
  test("renders App component", () => {
    render(<Sample />);
    // package.json に設定を書いて回避。
    // screen.debug();

    // screen.debug();
    // 完全一致
    expect(screen.getByText("Search:")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    // fails
    // expect(screen.getByText(/Searches for JavaScript/)).toBeNull();

    // success 存在しない要素のアサーションを行うためには、getByをqueryByに置換すると良いでしょう。
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });

  test("async await", async () => {
    // 非同期で最後に存在する場合は findBy を使います。
    render(<Sample />);
    expect(screen.queryByText(/Signed in as/)).toBeNull();

    screen.debug();
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

    screen.debug();
  });
});
