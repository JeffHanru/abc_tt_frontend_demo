import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the footer text', () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/Footer/i);
    expect(footerElement).toBeInTheDocument();
  });

  it('has the correct CSS class', () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector('footer');
    expect(footerElement).toHaveClass('footer');
  });
});
