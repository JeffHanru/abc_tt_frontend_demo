import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const articleOneLink = screen.getByRole('link', { name: /Article One/i });
    const articleTwoLink = screen.getByRole('link', { name: /Article Two/i });

    expect(articleOneLink).toBeInTheDocument();
    expect(articleTwoLink).toBeInTheDocument();
  });
});
