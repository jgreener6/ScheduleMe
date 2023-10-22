import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    try {
        // Destructure req.body (name, email, password)
        const { name, email, password } = req.body;

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        // Insert user into database
        const newUser = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
            [name, email, bcryptPassword]
        );

        // Generate JWT token
        const token = jwt.sign({ user_id: newUser.rows[0].id }, "jwtSecret");

        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        // Destructure req.body
        const { email, password } = req.body;

        // Check if user doesn't exist and throw error if they don't
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }

        // Check if incoming password is the same as the database password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).json("Invalid Credential");
        }

        // Give the user a JWT token
        const token = jwt.sign({ user_id: user.rows[0].id }, "jwtSecret");

        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

export default router;
