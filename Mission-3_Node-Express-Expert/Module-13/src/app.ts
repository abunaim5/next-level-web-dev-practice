import express, { Request, Response } from 'express';
import initDB from './config/db';
import logger from './middleware/logger';
import { userRoutes } from './modules/user/user.routes';
import { todoRoutes } from './modules/todo/todo.routes';
import { authRoutes } from './modules/auth/auth.routes';

const app = express();

// middleware or parser
app.use(express.json());
// app.use(express.urlencoded());

// initializing DB
initDB();

app.get('/', logger, (_: Request, res: Response) => {
    res.send('Hello World! What you think?');
});

// users apis
app.use('/users', userRoutes);

// todos apis
app.use('/todos', todoRoutes);

// auth apis
app.use('/auth', authRoutes);

app.use((req: Request, res: Response) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.path
    });
});

export default app;
