import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const router = express.Router();

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
