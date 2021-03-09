import { app } from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const start = async () => {
    dotenv.config();

    if (!process.env.MONGO_URI) {
        throw Error('MONGO_URI is not defined');
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connected to MongoDb');
    } catch (error) {
        console.log(error);
    }

    app.listen(5000, 'localhost', async () => {
        console.log('Listening on port 5000');
    });
};

start();
