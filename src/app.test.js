import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './app';


describe('Results', () => {
  test('should render Results', async () => {
    render(<App />);
    const getButton = screen.getByText('GET');
    await userEvent.click(getButton);
    expect(screen.getByRole('code')).toBeInTheDocument();
    //expect(screen.getByRole('code')).toHaveTextContent('fake thing 1');
  });
});
