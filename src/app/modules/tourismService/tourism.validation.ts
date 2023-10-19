import { z } from 'zod';
import { TOURISM_SERVICE_STATUS_ENUM } from './tourism.interface';

const createService = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    price: z.number({ required_error: 'Price is required' }),
    description: z.string({ required_error: 'Description is required' }),
    status: z
      .enum(Object.values(TOURISM_SERVICE_STATUS_ENUM) as [string, ...string[]])
      .optional(),
    review: z.string().optional(),
  }),
});

const updateService = z.object({
  body: z.object({
    title: z.string().optional(),
    price: z.number().optional(),
    description: z.string().optional(),
    status: z
      .enum(Object.values(TOURISM_SERVICE_STATUS_ENUM) as [string, ...string[]])
      .optional(),
    review: z.string().optional(),
  }),
});

export const tourismServiceValidations = { createService, updateService };
