import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => console.log('connect to db'));

const app = express();

app.listen(3000, () => (console.log("this nigga working!!!")));

app.use("/api/user", userRouter);