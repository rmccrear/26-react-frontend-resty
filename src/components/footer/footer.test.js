import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '.';


describe('Footer', () => {
  test('should render footer', async () => {
    render(<Footer />);
    const footer = await screen.findByRole('contentinfo');
    expect(footer).toHaveTextContent('© 2018')
  });
});