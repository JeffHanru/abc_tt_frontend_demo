import { render } from '@testing-library/react';
import { ArticleTitle } from './ArticleTitle';

describe('ArticleTitle', () => {
  it('renders the article title', () => {
    const { container } = render(<ArticleTitle>This is title</ArticleTitle>);
    const articleTitleElement = container.querySelector("h1");
    expect(articleTitleElement).toBeInTheDocument();
    expect(articleTitleElement).toHaveClass("article-title");
    expect(articleTitleElement).toHaveTextContent("This is title");
  });
});