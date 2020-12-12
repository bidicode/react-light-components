import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

import Button from '../../src/components/Button';

describe('Test button component', () => {
  it('exists in the document', () => {
    const { getByRole } = render(<Button/>);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('applies the id and name', () => {
    const { getByRole } = render(<Button
      id="my-id"
      name="my-button"
    />);

    const button = getByRole('button');
    expect(button).toHaveAttribute('id', 'my-id');
    expect(button).toHaveAttribute('name', 'my-button');
  });
})