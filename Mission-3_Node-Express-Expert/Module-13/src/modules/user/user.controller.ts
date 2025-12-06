import { Request, Response } from "express";
import UserService from "./user.service";

const UserController = {
    createUser: async (req: Request, res: Response) => {
        try {
            const result = await UserService.createUser(req.body);

            res.status(201).json({
                success: true,
                message: 'Data inserted successfully!',
                data: result.rows[0]
            });

            // console.log(result.rows[0]);
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },

    getUsers: async (_: Request, res: Response) => {
        try {
            const result = await UserService.getUsers();

            res.status(200).json({
                success: true,
                message: 'Users retrieved successfully!',
                data: result.rows
            })
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        };
    },

    getSingleUser: async (req: Request, res: Response) => {
        const id = req.params.id!;
        console.log(id)

        try {
            const result = await UserService.getSingleUser(id);

            if (result.rows.length === 0) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User retrieved successfully',
                    data: result.rows[0]
                });
            }
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },

    updateUser: async (req: Request, res: Response) => {
        const id = req.params.id!;
        const { name, email } = req.body;

        try {
            const result = await UserService.updateUser(name, email, id);

            if (result.rows.length === 0) {
                res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User updated successfully',
                    data: result.rows[0]
                });
            }
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        const id = req.params.id!;
    
        try {
            const result = await UserService.deleteUser(id);
    
            if (result.rowCount === 0) {
                res.status(404).json({
                    success: false,
                    message: "User not found"
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'User deleted successfully',
                    data: null
                });
            }
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
};

export default UserController;