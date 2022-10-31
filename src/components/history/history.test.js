import History from ".";
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// import userEvent from '@testing-library/user-event'

describe('History', () => {
  test('should render History Component', () => {
    const history = [
      {
        url: 'https://my.api/api/v1/pets'
      },
      {
        url: 'https://my.api/api/v1/pets/1'
      }
    ]
    render(<History {...{history}} />);
    expect(screen.getByText(history[0].url)).toBeInTheDocument();
  });
  
});