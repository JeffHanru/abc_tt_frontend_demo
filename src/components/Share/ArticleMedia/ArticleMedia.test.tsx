import { render } from "@testing-library/react";
import { ArticleMedia } from "./ArticleMedia";

const defaultProps = {
  altText: "Alt Text",
  src: "image.jpg",
  caption: "Image Caption",
  suppliedText: "Supplied",
  align: "embed",
  isFeature: true,
};

describe("ArticleMedia", () => {
  it("renders the component with provided props", () => {
    const { getByAltText, getByText, container } = render(
      <ArticleMedia
        {...defaultProps}
      />
    );

    const imageElement = getByAltText(defaultProps.altText);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute("src")).toBe(defaultProps.src);

    const captionElement = getByText(defaultProps.caption);
    expect(captionElement).toBeInTheDocument();

    const suppliedElement = container.querySelector("i")
    expect(suppliedElement).toHaveTextContent("Supplied");

    const figureElement = container.querySelector("figure")
    expect(figureElement).toHaveClass("feature-media-container");

  });

  it("renders the component when isFeature is false", () => {
    const { container } = render(
      <ArticleMedia
        {...defaultProps}
        isFeature={false}
      />
    );

    const figureElement = container.querySelector("figure")
    expect(figureElement).toHaveClass("embed-media-container");
  });

  it("renders the component when isFeature is false and align is right", () => {
    const { container } = render(
      <ArticleMedia
        {...defaultProps}
        isFeature={false}
        align="right"
      />
    );

    const figureElement = container.querySelector("figure")
    expect(figureElement).toHaveClass("embed-media-container-right-align");
  });

  it("renders the component when caption text is undefined", () => {
    const { container } = render(
      <ArticleMedia
        {...defaultProps}
        caption={undefined}
      />
    );

    const captionElement = container.querySelector("figcaption")
    expect(captionElement).not.toBeInTheDocument();
  });

  it("renders the component when supplier text is undefined", () => {
    const { container } = render(
      <ArticleMedia
        {...defaultProps}
        suppliedText={undefined}
      />
    );

    const captionElement = container.querySelector("i")
    expect(captionElement).not.toBeInTheDocument();
  });
});
