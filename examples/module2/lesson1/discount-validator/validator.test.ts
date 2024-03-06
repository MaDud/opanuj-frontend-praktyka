import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should return an error if first name and last name do not have at least one character', () => {
    const errors = formValidator('', '', 1);
    expect(errors).toContain(
      'First and last name must have at least one character'
    );
  });

  test.each([{}, [], 'abc', Symbol, '"1"', null, undefined])(
    'should throw an error if age is %s',
    (given) => {
      // @ts-expect-error
      expect(() => formValidator('A', 'Doe', given)).toThrowError(
        'Age must be a number'
      );
    }
  );

  test('should return empty array if all data are correct', () => {
    const result = formValidator('John', 'Doe', 30);

    expect(result.length).toEqual(0);
  });
});
