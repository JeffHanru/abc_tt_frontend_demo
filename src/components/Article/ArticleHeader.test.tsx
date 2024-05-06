import { render } from "@testing-library/react";
import { ArticleHeader } from "./ArticleHeader";

describe("ArticleHeader", () => {
  it("renders the title correctly", () => {
    const title = "Sample Title";
    const source = {
      name: "Sample Source",
      sourceURL: "https://sample-source.com",
    };
    const contributors = [
      { name: "Contributor 1", canonicalURL: "https://contributor1.com" },
      { name: "Contributor 2", canonicalURL: "https://contributor2.com" },
    ];
    const dates = {
      posted: "2022-01-01T12:00:00Z",
      updated: "2022-01-02T10:00:00Z",
    };
    const { getByText, container } = render(<ArticleHeader title={title} source={source} dates={dates} contributors={contributors}/>);
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(contributors[0].name)).toBeInTheDocument();
    expect(getByText(contributors[0].name).getAttribute("href")).toBe(
      contributors[0].canonicalURL
    );
    expect(getByText(contributors[1].name)).toBeInTheDocument();
    expect(getByText(contributors[1].name).getAttribute("href")).toBe(
      contributors[1].canonicalURL
    );
    expect(getByText(source.name)).toBeInTheDocument();
    expect(getByText(source.name).getAttribute("href")).toBe(source.sourceURL);
    expect(container.querySelectorAll(".date span")[0]).toHaveTextContent("Posted Sat 01 Jan 2022 at 23:00PM");
    expect(container.querySelectorAll(".date span")[1]).toHaveTextContent(", Updated Sun 02 Jan 2022 at 21:00PM");
  });
});
