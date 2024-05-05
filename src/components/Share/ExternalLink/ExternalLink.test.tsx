import { render } from '@testing-library/react';
import { ExternalLink } from './ExternalLink';

describe('ArticleTitle', () => {
  it('renders the external link', () => {
    const { container } = render(<ExternalLink text="link text" url="/local" />);
    const externalLinkElement = container.querySelector("a");
    expect(externalLinkElement).toBeInTheDocument();
    expect(externalLinkElement).toHaveTextContent("link text");
    expect(externalLinkElement).toHaveAttribute("href", "/local");
  });

  it('renders the external link with classname', () => {
    const { container } = render(<ExternalLink text="link text" url="/local" classNames="random" />);
    const externalLinkElement = container.querySelector("a");
    expect(externalLinkElement).toHaveClass("random");
  });
});