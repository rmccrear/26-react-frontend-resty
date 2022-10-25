import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Form from '.';


describe('Form', () => {
  test('should render form', () => {
    render(<Form />);
    const get = screen.getByText('GET');
    const post = screen.getByText('POST');
    const put = screen.getByText('PUT');
    const deleteElm = screen.getByText('DELETE');
    expect(get).toBeInTheDocument();
    expect(post).toBeInTheDocument();
    expect(put).toBeInTheDocument();
    expect(deleteElm).toBeInTheDocument();
  });
});