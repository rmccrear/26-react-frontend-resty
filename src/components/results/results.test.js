
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Results from '.';


describe('Results', () => {
  test('should render Results', async () => {
    const data = {
      animal: "cat"
    }
    render(<Results data={ data } />);
    const results = screen.getByRole('code');
    // expect(results).toHaveTextContent(JSON.stringify(data, undefined, 2))
    expect(results).toBeInTheDocument();
  });
});