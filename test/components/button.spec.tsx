import { render } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom';

import Button from '../../src/components/Button';

describe('Test button component', () => {
  it('exists in the document', () => {
    const { getByRole } = render(<Button />);

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

  it(`it applies button's variant primary`, () => {
    const { getByRole } = render(<Button className="primary"/>);

    const button = getByRole('button');
    expect(button).toHaveClass('primary');
    expect(button).not.toHaveClass('secondary');
  });

  it(`it applies button's variant secondary`, () => {
    const { getByRole } = render(<Button className="secondary"/>);

    const button = getByRole('button');
    expect(button).toHaveClass('secondary');
    expect(button).not.toHaveClass('primary');
  });

  it('applies className', () => {
    const { getByRole } = render(<Button className="new-class"/>);

    const button = getByRole('button');
    expect(button).toHaveClass('new-class');
    expect(button).toHaveClass('rlight-btn-body');
    expect(button).not.toHaveClass('other-class');
  });

  it('applies className for compact button', () => {
    const { getByRole } = render(<Button className="new-class" isCompact={true} />);

    const button = getByRole('button');
    expect(button).toHaveClass('new-class');
    expect(button).toHaveClass('rlight-btn-body');
    expect(button).toHaveClass('rlight-btn-compact');
    expect(button).not.toHaveClass('other-class');
  });

  it('applies the tab index correctly', () => {
    const { getByRole } = render(<Button tabIndex={2}/>);

    const button = getByRole('button');
    expect(button.tabIndex).toEqual(2);
    expect(button.tabIndex).not.toEqual(0);
  });

  it('has the attribute disabled', () => {
    const { getByRole } = render(<Button disabled={true} />);

    const button = getByRole('button');
    expect(button).toHaveAttribute('disabled');
    expect(button).not.toHaveAttribute('');
  });

  it('has the accessKey', () => {
    const { getByRole } = render(<Button accessKey={'s'}/>);

    const button = getByRole('button');
    expect(button.accessKey).toEqual('s');
    expect(button.accessKey).not.toEqual('x');
  });
});
