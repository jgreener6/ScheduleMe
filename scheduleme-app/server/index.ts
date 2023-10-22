
import authRoutes from './auth';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createConnection } from 'typeorm';

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/auth', authRoutes);


createConnection().then(() => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json());

    app.get('/', (req, res) => {
      res.send('Server is up and running');
    });

    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => console.log(error));
