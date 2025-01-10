import {Router} from 'express';
import validateRequest from '../../middleware/validateRequest';
import { createBlogValidationSchema } from './blog.validation';
import { BlogControllers } from './blog.controller';
const router = Router();

router.get('/', (req,res, next) => {
    res.send('Blog Route');
})

router.post('/',
    validateRequest(createBlogValidationSchema),
    BlogControllers.createBlog
);
export const BlogRoutes = router;