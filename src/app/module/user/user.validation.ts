import { z } from "zod";


export const createUserSchema = z.object({
  name: z.string().min(1, "Name is required"), 
  email: z
    .string()
    .email("Invalid email address") 
    .nonempty("Email is required"), 
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long") ,
   
  role: z.enum(["admin", "user"]).optional(), 
  isBlocked: z.boolean().optional(), 
});

// Validation schema for user login
export const loginUserSchema = z.object({
  email: z
    .string()
    .email("Invalid email address") 
    .nonempty("Email is required"), 
  password: z.string().min(6, "Password must be at least 6 characters long"), 
});

// Validation schema for user updates
export const updateUserSchema = z.object({
  name: z.string().optional(), 
  email: z.string().email("Invalid email address").optional(), 
  password: z.string().min(6, "Password must be at least 6 characters long").optional(), 
  role: z.enum(["admin", "user"]).optional(), 
  isBlocked: z.boolean().optional(), 
});
