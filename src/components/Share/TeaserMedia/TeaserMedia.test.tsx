import { render } from '@testing-library/react';
import { TeaserMedia } from './TeaserMedia';

describe('ArticleTitle', () => {
  it('renders the Teaser media component', () => {
    const { container } = render(<TeaserMedia title="title text" text="content text" url="/local" />);
    const titleElement = container.querySelector("h2");
    expect(titleElement).toHaveTextContent("title text");
    const linkElement = container.querySelector("a");
    expect(linkElement).toHaveTextContent("content text");
    expect(linkElement).toHaveAttribute("href", "/local");
  });
});