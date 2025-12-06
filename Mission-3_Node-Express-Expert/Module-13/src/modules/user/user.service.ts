import { pool } from "../../config/db";
import bcrypt from "bcryptjs";

const UserService = {
    createUser: async (payload: Record<string, unknown>) => {
        const {name, email, password, role} = payload;

        const hashedPassword = await bcrypt.hash(password as string, 10);

        const res = await pool.query(
            `INSERT INTO users(name, email, password, role) VALUES($1, $2, $3, $4) RETURNING *`,
            [name, email, hashedPassword, role]
        );

        return res;
    },

    getUsers: async () => {
        const res = await pool.query(
            `SELECT * FROM users`
        );

        return res;
    },

    getSingleUser: async (id: string) => {
        const res = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );

        return res;
    },

    updateUser: async (name: string, email: string, id: string) => {
        const res = await pool.query(
            `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`,
            [name, email, id]
        );

        return res;
    },

    deleteUser: async (id: string) => {
        const res = await pool.query(
            `DELETE FROM users WHERE id = $1`,
            [id]
        );

        return res;
    }
};

export default UserService;