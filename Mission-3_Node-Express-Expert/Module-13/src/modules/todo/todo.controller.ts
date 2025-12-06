import { Request, Response } from "express";
import TodoService from "./todo.service";

const TodoController = {
    createTodo: async (req: Request, res: Response) => {
        const { user_id, title } = req.body;

        try {
            const result = await TodoService.createTodo(user_id, title);

                res.status(201).json({
                    success: true,
                    message: 'Todos created successfully!',
                    data: result.rows[0]
                });
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
};

export default TodoController;