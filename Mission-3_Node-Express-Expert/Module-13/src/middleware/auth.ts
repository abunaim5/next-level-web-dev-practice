import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import config from '../config';

const auth = (...roles: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(500).json({
                    message: "Now Allowed"
                });
            }

            const decoded = jwt.verify(token, config.jwt_secret as string) as JwtPayload;
            req.user = decoded;

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(500).json({
                    message: 'unauthorized'
                });
            }

            next();
        } catch (err: any) {
            res.status(500).json({
                success: false,
                message: err.message
            })
        }
    }
};

export default auth;