import { Request, Response } from "express";
import AuthService from "./auth.service";

const AuthController = {
    loginUser: async (req: Request, res: Response) => {
        const { email, password } = req.body;

        try {
            const result = await AuthService.loginUser(email, password);

            res.status(200).json({
                success: true,
                message: 'Login successful!',
                data: result
            });
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
};

export default AuthController;