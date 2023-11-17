import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentroute } from './app/modules/student/studentroute';

// parser
app.use(express.json());
app.use(cors());

// application
app.use('/api/v1/student', studentroute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Worlds!');
});

// console.log(process.cwd());

export default app;
