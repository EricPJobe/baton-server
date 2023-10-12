// Middleware example remove this file if you don't need it as morgan is already used in src\App\index.ts
import { NextFunction, Request, Response } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  console.log('Request logged:', req.method, req.path);
  next();
};