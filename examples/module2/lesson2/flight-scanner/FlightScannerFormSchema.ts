import { z } from 'zod';
import { stringToDate } from './stringToDate';

const TripSchema = z.union([z.literal('one-way'), z.literal('round-trip')]);

export const FlightScannereFormSchema = z
  .object({
    origin: z.string().min(1, { message: 'Origin cannot be empty' }),
    destination: z.string().optional(),
    trip: TripSchema,
    startDate: z
      .string()
      .refine(
        (value) =>
          /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[-]([0]?[1-9]|[1][0-2])[-]([0-9]{4}|[0-9]{2})$/.test(
            value
          ),
        'Start date must be in format DD-MM-YYYY'
      ),
    endDate: z
      .string()
      .refine(
        (value) =>
          /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[-]([0]?[1-9]|[1][0-2])[-]([0-9]{4}|[0-9]{2})$/.test(
            value ?? ''
          ),
        'End date must be in format DD-MM-YYYY'
      )
      .optional()
      .or(z.literal('')),
  })
  .superRefine((formData, ctx) => {
    if (stringToDate(formData.startDate) < new Date(Date.now())) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'Incorrect start date',
      });
    }

    if (
      formData.endDate !== undefined &&
      stringToDate(formData.endDate) < stringToDate(formData.startDate)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'End date cannot be earlier than start date',
      });
    }
  });

export const isZodError = (error: unknown): error is z.ZodError =>
  error instanceof z.ZodError;
