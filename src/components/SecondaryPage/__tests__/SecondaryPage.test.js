/**
 * @jest-environment jsdom
 */

import { render, screen, cleanup } from '@testing-library/react';
import SecondaryPage from '../index';

afterEach(cleanup);

describe('Title (Component)', () => {
  it('Renders with the title', () => {
    const props = {
      title: 'Sample Event Title',
    };
    render(<SecondaryPage {...props} />);
    expect(
      screen.queryByRole('heading', { name: 'Sample Event Title' }),
    ).toBeInTheDocument();
  });

  it('Renders children without a title', () => {
    render(
      <SecondaryPage>
        <p>Sample child text</p>
      </SecondaryPage>,
    );

    expect(screen.queryByText(/sample\schild\stext/gi)).toBeInTheDocument();
  });
});
