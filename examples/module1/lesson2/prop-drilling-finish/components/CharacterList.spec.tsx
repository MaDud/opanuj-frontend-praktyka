// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import { CharacterList } from './CharacterList';
import { afterEach } from 'node:test';
import { CHARACTERS_LIST } from '../mocks';


describe('CharacterList', () => {
  afterEach(cleanup);

  test('should render list with two elements', () => {
    const { getByRole } = render(
      <CharacterList characters={CHARACTERS_LIST} />
    );

    const list = getByRole('list');

    expect(list).toBeTruthy();

    const listElements = list.children;
    expect(listElements.length).toEqual(3);
  });
});
