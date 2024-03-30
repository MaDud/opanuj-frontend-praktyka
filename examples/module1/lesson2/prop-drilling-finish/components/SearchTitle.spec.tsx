// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { test, describe, expect, vi, afterEach } from 'vitest';
import SearchTitle from './SearchTitle';

describe('SearchTitle', () => {
  afterEach(cleanup);

  test('should render with default title', () => {
    const { getByRole } = render(<SearchTitle />);

    expect(getByRole('heading').textContent).toEqual(
      'Wyszukiwarka postaci Rick and Morty'
    );
  });

  test('should render with custom title', () => {
    const { getByRole } = render(<SearchTitle name="Custom Title" />);

    expect(getByRole('heading').textContent).toEqual(
      'Wyszukiwarka postaci Custom Title'
    );
  });
});
