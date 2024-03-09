import dotenv from 'dotenv';
import express from 'express';
import mongoose from "mongoose";
import postRouter from "./routes/post.routes.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(express.static('static'));
app.use('/api', postRouter);

const run = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {useUnifiedTopology: true, useNewUrlParser: true});

        app.listen(process.env.PORT, () => {
            console.log('start');
        })
    } catch (e) {
        console.log(e);
    }
}

run();
