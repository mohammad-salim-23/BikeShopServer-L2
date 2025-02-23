import express, { Application } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';

const app: Application = express();
const cors = require("cors");
app.use(cors ({
  origin : "http://localhost:5173",
   credentials : true
}))
app.use(express.json());
app.use('/api', router);
app.get('/', (req, res) => {
  console.log('Hello World!');
  res.send('Hello!');
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;
