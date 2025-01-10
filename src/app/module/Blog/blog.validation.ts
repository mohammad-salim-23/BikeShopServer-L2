import { z } from "zod";

export  const createBlogValidationSchema = z.object(
    {
    body:z.object({
        title:z.string(),
        content:z.string(),
       

    })
    }
);
export const updateBlogValidationSchema = z.object(
    {
        title:z.string().min(1,"Title is required").optional(),
        content:z.string().min(1,"content is required").optional(),
        isPublished:z.boolean().optional()
    }
);