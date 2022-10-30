import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import App from './App';


describe('Results', () => {

  test('should render Results', async () => {
    render(<App />);
    const getButton = screen.getByText('GET');
    await userEvent.click(getButton);
    expect(screen.getAllByRole('code').length).toBe(2);
  });

  test('should update when button is clicked', async () => {
    const user = userEvent.setup()
    const testUrl = 'http://localhost:1111111/api/v11111/test';
    render(<App />);
    const urlInput = screen.getByTestId('url-input');
    const submitButton = screen.getByTestId('url-input-submit');
    await user.click(urlInput);
    await user.keyboard(testUrl);
    await user.click(submitButton);
    const urlDisplay = await screen.findByTestId('url-display');
    expect(urlDisplay).toHaveTextContent(`URL: ${testUrl}`);
  });

});
