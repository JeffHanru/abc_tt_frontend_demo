import { render } from "@testing-library/react";
import { InstagramIframeMedia } from "./InstagramIframeMedia";

describe("InstagramIframeMedia", () => {
  it("renders the Instagram iframe", () => {
    const src = "https://www.instagram.com/p/ABC123/";
    const { container } = render(<InstagramIframeMedia src={src} />);
    const iframeElement = container.querySelector("a");

    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute("href", src);
  });
});
