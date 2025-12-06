import { pool } from "../../config/db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "../../config";

const AuthService = {
    loginUser: async (email: string, password: string) => {
        const res = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );

        if (!res.rows.length) return null;

        const user = res.rows[0];

        const matched = await bcrypt.compare(password, user.password);

        if (!matched) return false;

        const token = jwt.sign({ name: user.name, email: user.email, role: user.role }, config.jwt_secret as string, {
            expiresIn: "7d"
        });

        console.log(token);

        return { token, user };
    }
};

export default AuthService;