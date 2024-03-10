import {
  FlightScannereFormSchema,
  isZodError,
} from './FlightScannerFormSchema';

const form = document.querySelector('#flight-form') as HTMLFormElement;
const errorsList = document.querySelector('#errors') as HTMLDataListElement;

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  try {
    FlightScannereFormSchema.parse(Object.fromEntries(formData));
  } catch (error) {
    if (isZodError(error)) {
      errorsList.innerHTML = error.issues
        .map((issue) => `<li>${issue.message}</li>`)
        .join('');
    }
  }
});
