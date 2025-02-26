import { z } from "zod";

export const orderValidationSchema = z.object({
    // userEmail: z.string().email(),
    // productName: z.string().min(1),
    // productBrand: z.string().min(1),
    // productPrice: z.number().min(0),
    // quantity: z.number().min(1),
    // totalPrice: z.number().min(0),
    // paymentStatus: z.enum(["pending", "paid", "failed"]),
    // paymentMethod: z.enum(["stripe"]),
  });
  export const updateOrderValidationSchema = z.object({
    userEmail: z.string().email().optional(),
    productName: z.string().min(1).optional(),
    productBrand: z.string().min(1).optional(),
    productPrice: z.number().min(0).optional(),
    quantity: z.number().min(1).optional(),
    totalPrice: z.number().min(0).optional(),
    paymentStatus: z.enum(["pending", "paid", "failed"]).optional(),
    paymentMethod: z.enum(["stripe"]).optional(),
  });