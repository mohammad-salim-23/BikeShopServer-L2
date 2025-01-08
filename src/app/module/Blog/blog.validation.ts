import { z } from "zod";

export  const createBlogSchema = z.object(
    {
        title:z.string().min(1,"Title is required"),
        content:z.string().min(1,"content is required"),
        isPublished:z.boolean().optional()
    }
);
export const updateBlogSchema = z.object(
    {
        title:z.string().min(1,"Title is required").optional(),
        content:z.string().min(1,"content is required").optional(),
        isPublished:z.boolean().optional()
    }
);