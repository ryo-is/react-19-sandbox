import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment).toMatchSnapshot();
  });

  it('display h1', () => {
    render(<App />);
    const headerElement = screen.getByText('Vite + React');
    expect(headerElement).toBeInTheDocument();
  });

  it('count up', async () => {
    render(<App />);

    const afterClickButton = screen.getByRole('button', { name: 'count is 0' });
    await userEvent.click(afterClickButton);

    const beforeClickButton = screen.getByRole('button', {
      name: 'count is 1',
    });
    expect(beforeClickButton).toBeInTheDocument();
    expect(afterClickButton).toHaveTextContent('count is 1');
  });
});
