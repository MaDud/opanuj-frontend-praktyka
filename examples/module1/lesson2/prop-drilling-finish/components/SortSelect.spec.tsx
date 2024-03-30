// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { test, describe, expect, vi, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import SortSelect from './SortSelect';

const onSelectMock = vi.fn();

describe('SortSelect', () => {
  afterEach(cleanup);

  test('should render label', () => {
    const { getByText } = render(
      <SortSelect sortOption="" setSortOption={onSelectMock} />
    );

    expect(getByText('Sort by')).toBeTruthy();
  });

  test('should render dropdown with default value', () => {
    const { getByRole } = render(
      <SortSelect sortOption="" setSortOption={onSelectMock} />
    );

    expect(getByRole('combobox')).toHaveValue('');
    expect((getByRole('option', {name: "Initial"}) as HTMLOptionElement).selected).toBeTruthy()
  });

  test('should render dropdown with 3 options', () => {
    const { queryAllByRole } = render(
      <SortSelect sortOption="" setSortOption={onSelectMock} />
    );

    const options = queryAllByRole('option');

    expect(options.length).toEqual(3);
    expect(options[0].textContent).toEqual('Initial');
    expect(options[1].textContent).toEqual('Name');
    expect(options[2].textContent).toEqual('Created Date');
  });

  test('should call onSelectMock on option select', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(
      <SortSelect sortOption="" setSortOption={onSelectMock} />
    );
    await user.selectOptions(getByRole('combobox'), 'Name');

    expect(onSelectMock).toBeCalledTimes(1);
  });
});
