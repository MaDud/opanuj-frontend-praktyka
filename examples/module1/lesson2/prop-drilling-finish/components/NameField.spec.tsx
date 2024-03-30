// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { test, describe, expect, vi, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import { NameField } from './NameField';

const onChangeMock = vi.fn();

describe('NameField', () => {
  afterEach(cleanup);

  test('should render input with label "Name', () => {
    const { queryAllByRole, getByText } = render(
      <NameField name="" setName={onChangeMock} />
    );

    expect(getByText('Name')).toBeTruthy();
    expect(queryAllByRole('textbox').length).toEqual(1);
  });

  test('should render dropdown with predefined value', () => {
    const { getByRole } = render(
      <NameField name="test" setName={onChangeMock} />
    );

    expect(getByRole('textbox')).toHaveValue('test');
  });

  test('should call onChangeMock on input', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<NameField name="" setName={onChangeMock} />);

    await user.type(getByRole('textbox'), 'T');

    expect(onChangeMock).toBeCalledTimes(1);
  });
});
