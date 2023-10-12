// Controller example
import { Request, Response } from 'express';

export default {
  getAll: (req: Request, res: Response) => {
    // some logic to get all resources
    res.send('Hello World!');
  },
  getById: (req: Request, res: Response) => {
    // some logic to get resource by id
    res.send(`Hello ${req.params.id}!`);
  },
  create: (req: Request, res: Response) => {
    // some logic to create new resource
    res.send(`Hello World!<br>${JSON.stringify(req.body)}`);
  },
};