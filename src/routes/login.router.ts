import { Router } from 'express';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const loginRouter = Router();

const authenticateUserController = new AuthenticateUserController();

loginRouter.post('/login', authenticateUserController.handle);

export { loginRouter };
