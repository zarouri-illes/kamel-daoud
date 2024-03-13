import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

mongoose.connect("mongodb+srv://illes:illesisillesforeva@kamel-daoud.jkvmmxz.mongodb.net/?retryWrites=true&w=majority&appName=kamel-daoud").then(() => console.log('connect to db'));

const app = express();

app.use(express.json());

app.listen(3000, () => (console.log("this nigga working!!!")));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);