import express, { Application } from 'express';
import { BlogRoutes } from './app/module/Blog/blog.route';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';


const app: Application = express();

app.use(express.json());
app.use('/api',router);
app.get('/', (req, res) => {
  console.log('Hello World!');
  res.send('Hello!');
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;
