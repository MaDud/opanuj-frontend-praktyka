// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { test, describe, expect, vi, afterEach } from 'vitest';
import GenderSelect from './GenderSelect';
import userEvent from '@testing-library/user-event';

const onSelectMock = vi.fn();

describe('GenderSelect', () => {
  afterEach(cleanup);

  test('should render label', () => {
    const { getByText } = render(
      <GenderSelect gender="" setGender={onSelectMock} />
    );

    expect(getByText('Gender')).toBeTruthy();
  });

  test('should render dropdown with default value', () => {
    const { getByRole } = render(
      <GenderSelect gender="" setGender={onSelectMock} />
    );

    expect(getByRole('combobox')).toHaveValue('');
    expect((getByRole('option', {name: "Any Gender"}) as HTMLOptionElement).selected).toBeTruthy()
  });

  test('should render dropdown with 5 options', () => {
    const { queryAllByRole } = render(
      <GenderSelect gender="" setGender={onSelectMock} />
    );

    const options = queryAllByRole('option');

    expect(options.length).toEqual(5);
    expect(options[0].textContent).toEqual('Any Gender');
    expect(options[1].textContent).toEqual('Female');
    expect(options[2].textContent).toEqual('Male');
    expect(options[3].textContent).toEqual('Genderless');
    expect(options[4].textContent).toEqual('Unknown');
  });

  test('should call onSelectMock on option select', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(
      <GenderSelect gender="" setGender={onSelectMock} />
    );

    await user.selectOptions(getByRole('combobox'), 'Female');

    expect(onSelectMock).toBeCalledTimes(1);
  });
});
