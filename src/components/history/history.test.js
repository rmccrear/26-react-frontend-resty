import History from ".";
import {findByText, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('History', () => {
  test('should render History Component', async () => {
    const history = [
      {
        url: 'https://my.api/api/v1/pets',
        method: 'GET',
        result: {
          data: [{name: 'Fluffy'}, {name: 'Rex'}],
          headers: {'content-type': 'application/json; charset=utf-8'},
          status: 200
        }
      },
      {
        url: 'https://my.api/api/v1/pets/1',
        method: 'GET',
        result: {
          data: {name: 'Fluffy'},
          headers: {'content-type': 'application/json; charset=utf-8'},
          status: 200
        }
      }
    ];
    render(<History {...{history}} />);
    const historyItem1 = screen.getByText(history[0].url);
    expect(screen.getByText(history[0].url)).toBeInTheDocument();
    expect(screen.queryByText('Status: 200')).not.toBeInTheDocument();
    await userEvent.click(historyItem1);
    expect(await screen.findByText('Status: 200')).toBeInTheDocument();

  });
  
});