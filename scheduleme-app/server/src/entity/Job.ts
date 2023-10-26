import bcrypt from "bcrypt";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { router } from '../routes/authRoutes';


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
