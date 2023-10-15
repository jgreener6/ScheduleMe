import express from 'express';
import authRoutes from './auth';

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/auth', authRoutes);


app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
