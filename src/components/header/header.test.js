import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '.';


describe('Header', () => {
  test('should render Header', async () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveTextContent('RESTy')
  });
});