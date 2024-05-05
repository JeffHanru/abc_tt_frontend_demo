import { render } from "@testing-library/react";
import { InstagramIframeMedia } from "./InstagramIframeMedia";

describe("InstagramIframeMedia", () => {
  it("renders the Instagram iframe", () => {
    const src = "https://www.instagram.com/p/ABC123/";
    const { container } = render(<InstagramIframeMedia src={src} />);
    const iframeElement = container.querySelector("iframe");

    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute("src", `${src}embed/`);
  });
});
