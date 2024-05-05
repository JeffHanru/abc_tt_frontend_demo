import { render } from '@testing-library/react';
import { ArticleText } from './ArticleText';

describe('ArticleText', () => {
  it('renders the article text', () => {
    const { container } = render(<ArticleText>This is text</ArticleText>);
    const articleTextElement = container.querySelector("p");
    expect(articleTextElement).toBeInTheDocument();
    expect(articleTextElement).toHaveClass("text-normal");
  });

  it('renders the article text with quote variant', () => {
    const { container } = render(<ArticleText variant='quote'>This is text</ArticleText>);
    const articleTextElement = container.querySelector("p");
    expect(articleTextElement).toBeInTheDocument();
    expect(articleTextElement).toHaveClass("text-quote");
  });
});