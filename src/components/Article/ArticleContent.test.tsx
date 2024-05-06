import { render } from "@testing-library/react";
import { ArticleContent } from "./ArticleContent";

describe("ArticleContent", () => {
  it("renders children and dates correctly", () => {
    const children = "This is the article content";
    const dates ={
      posted: "2021-11-21T20:13:18+00:00",
      updated: "2021-11-21T23:34:23+00:00",
    };

    const { getByText,container } = render(
      <ArticleContent children={children} dates={dates} />
    );

    const contentElement = getByText(children);
    const createdDateElement = container.querySelectorAll("span")[0]
    const updatedDateElement = container.querySelectorAll("span")[1]

    expect(contentElement).toBeInTheDocument();
    expect(createdDateElement).toHaveTextContent("Posted 22 Nov 2021");
    expect(updatedDateElement).toHaveTextContent("Updated 22 Nov 2021");
  });
});
