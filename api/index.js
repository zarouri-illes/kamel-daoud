import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => console.log('connect to db'));

const app = express();

app.listen(300, () => (console.log("this nigga working!!!")));