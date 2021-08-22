import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const registerRouter = Router();

const createUserController = new CreateUserController();

registerRouter.post('/', createUserController.handle);

export { registerRouter };
