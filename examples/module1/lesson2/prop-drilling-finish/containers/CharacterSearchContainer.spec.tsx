// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { test, describe, expect, vi, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import CharacterSearchContainer from './CharacterSearchContainer';
import * as useCharacterSearch from '../hooks/useCharacterSearch';
import { CHARACTERS_LIST } from '../mocks';

vi.spyOn(useCharacterSearch, 'useCharacterSearch').mockReturnValue(
  CHARACTERS_LIST
);

describe('CharacterSearchContainer', () => {
  afterEach(() => {
    cleanup();
vi.clearAllMocks()});

  test('should render title', () => {
    const { getAllByRole } = render(<CharacterSearchContainer />);

    expect(getAllByRole('heading')[0].textContent).toEqual(
      'Wyszukiwarka postaci Rick and Morty'
    );
  });

  test('should render textbox', () => {
    const { getByRole } = render(<CharacterSearchContainer />);

    expect(getByRole('textbox')).toBeTruthy();
  });

  test('should render 2 combobox, one with text "Any Gender", second with text "Initial"', () => {
    const { getAllByRole, getByRole } = render(<CharacterSearchContainer />);

    const combobox = getAllByRole('combobox');

    expect(combobox.length).toEqual(2);

    expect(
      (getByRole('option', { name: 'Any Gender' }) as HTMLOptionElement)
        .selected
    ).toBeTruthy();
    expect(
      (getByRole('option', { name: 'Initial' }) as HTMLOptionElement).selected
    ).toBeTruthy();
  });

  test('should render list with 3 elements', () => {
    const { getByRole } = render(<CharacterSearchContainer />);

    const list = getByRole('list');

    expect(list).toBeTruthy();

    const listElements = list.children;
    expect(listElements.length).toEqual(3);
  });

  test('should call useCharacterSearch on gender change', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByRole } = render(<CharacterSearchContainer />);

    const genderDropdown = getAllByRole('combobox')[0]

    await user.selectOptions(genderDropdown, "Female")

    expect((getByRole('option', {name: "Female"}) as HTMLOptionElement).selected).toBeTruthy()
    expect(useCharacterSearch.useCharacterSearch).toBeCalledWith("", "female")
  })

  test('should sort character list by date after sort option', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByRole } = render(<CharacterSearchContainer />);

    const sortDropdown = getAllByRole('combobox')[1]

    await user.selectOptions(sortDropdown, "Created Date")

    expect((getByRole('option', {name: "Created Date"}) as HTMLOptionElement).selected).toBeTruthy()

    const listElements = getByRole('list').children;

    expect(listElements[0].textContent).toEqual("B")
    expect(listElements[1].textContent).toEqual("C")
    expect(listElements[2].textContent).toEqual("A")
  })

  test('should sort character list by name after sort option change', async () => {
    const user = userEvent.setup()
    const { getAllByRole, getByRole } = render(<CharacterSearchContainer />);

    const sortDropdown = getAllByRole('combobox')[1]

    await user.selectOptions(sortDropdown, "Name")

    expect((getByRole('option', {name: "Name"}) as HTMLOptionElement).selected).toBeTruthy()

    const listElements = getByRole('list').children;

    expect(listElements[0].textContent).toEqual("A")
    expect(listElements[1].textContent).toEqual("B")
    expect(listElements[2].textContent).toEqual("C")
  })
});
