
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Results from '.';
import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';


describe('Results', () => {
  test('should render Results', async () => {
    const data = {
      animal: "cat"
    }
    render(<Results data={ data } />);
    const results = screen.getAllByRole('code');
    expect(results.length).toBe(2)
  });
});