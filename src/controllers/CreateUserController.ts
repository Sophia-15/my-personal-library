import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserServices';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      name, username, email, password,
    } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name, username, email, password,
    });

    return res.json(user);
  }
}

export { CreateUserController };
