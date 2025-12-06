import express from 'express';
import TodoController from './todo.controller';

const router = express.Router();

router.post('/', TodoController.createTodo);

export const todoRoutes = router;