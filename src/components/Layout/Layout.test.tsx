import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Layout from "./Layout";

describe("Layout component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <BrowserRouter>
        <Layout>children content</Layout>
      </BrowserRouter>
    );
    const LayoutElement = container.querySelector(".content");
    expect(LayoutElement).toHaveTextContent("children content");
  });
});
