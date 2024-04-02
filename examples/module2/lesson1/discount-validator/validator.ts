export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (lastName.length <1 && firstName.length <1) {
    errors.push('First and last name must have at least one character')
  }

  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number')
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
