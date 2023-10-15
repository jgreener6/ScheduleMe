import express from 'express';
import authRoutes from './auth';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/auth', authRoutes);
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json()); // to be able to access req.body


app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
