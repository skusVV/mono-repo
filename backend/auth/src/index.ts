import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import { userRouter } from './routes/user.router';

dotenv.config();

const app: Express = express();
const PORT = Number(process.env.PORT);

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

userRouter(app);

app.listen(PORT, async () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);

    try {
      console.log('DB Connecting....');
      await mongoose.connect(process.env.MONGODB_URI!);
      console.log('DB Connected');
    } catch (e) {
      console.log(e)
    }
});


