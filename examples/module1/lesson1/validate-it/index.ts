import { INVALID, VALID } from './constants';
import { clearButton, input, result, validateButton } from './elements';
import { isEven, isHigher, isInteger, isSmaller } from './helpers';

const isValueValid = (value: string) => {
  const valueToNumber = Number(value);
  return [
    isInteger(valueToNumber),
    isSmaller({ value: valueToNumber, compareValue: 100 }),
    isHigher({ value: valueToNumber, compareValue: 0 }),
    isEven(valueToNumber),
  ].every((value) => value === true);
};

const onValidateButtonClick = () => {
  if (isValueValid(input.value)) {
    result.innerHTML = VALID;
    return;
  }

  result.innerHTML = INVALID;
};

const onClearButtonClick = () => {
  input.value = '';
  result.innerHTML = '';
};

(() => {
  validateButton.addEventListener('click', onValidateButtonClick);
  clearButton.addEventListener('click', onClearButtonClick);
})();