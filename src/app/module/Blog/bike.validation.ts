import { z } from 'zod';

export const createBikeValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Bike name is required'),
    brand: z.string().min(1, 'Brand is required'),
    model: z.string().min(1, 'Model is required'),
    category: z.string().min(1, 'Category is required'),
    price: z.number().min(0, 'Price must be a positive number'),
    stock: z.number().min(0, 'Stock must be a positive number'),
    availability: z.boolean().optional(),
    engineCapacity: z.number().min(50, 'Engine capacity must be at least 50cc'),
    color: z.array(z.string()).min(1, 'At least one color is required'),
    image: z.string().url('Invalid image URL'),
    description: z.string().optional(),
  }),
});

export const updateBikeValidationSchema = z.object({
  name: z.string().min(1, 'Bike name is required').optional(),
  brand: z.string().min(1, 'Brand is required').optional(),
  model: z.string().min(1, 'Model is required').optional(),
  category: z.string().min(1, 'Category is required').optional(),
  price: z.number().min(0, 'Price must be a positive number').optional(),
  stock: z.number().min(0, 'Stock must be a positive number').optional(),
  availability: z.boolean().optional(),
  engineCapacity: z.number().min(50, 'Engine capacity must be at least 50cc').optional(),
  color: z.array(z.string()).min(1, 'At least one color is required').optional(),
  image: z.string().url('Invalid image URL').optional(),
  description: z.string().optional(),
});
