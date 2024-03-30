// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import { CharacterCard } from './CharacterCard';
import { afterEach } from 'node:test';
import { CHARACTERS_LIST } from '../mocks';

const character = CHARACTERS_LIST[0];

describe('CharacterCard', () => {
  afterEach(cleanup);

  test('should display name and title', () => {
    const { getByRole } = render(<CharacterCard character={character} />);

    expect(getByRole('heading').textContent).toEqual(character.name);
    expect(getByRole('img')).toHaveAttribute('src', character.image);
  });
});
