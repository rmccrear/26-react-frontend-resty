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
    //expect(screen.getByRole('code')).toHaveTextContent('fake thing 1');
  });
  test('should update when text is entered', async () => {
    const user = userEvent.setup()
    const testUrl = 'http://localhost:1111111/api/v11111/test';
    render(<App />);
    const urlInput = screen.getByTestId('url-input');
    await user.click(urlInput);
    await user.keyboard(testUrl);
    const urlDisplay = await screen.findByTestId('url-display');
    expect(urlDisplay).toHaveTextContent(`URL: ${testUrl}`);
  });

});
