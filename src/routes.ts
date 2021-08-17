import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateBookController } from './controllers/CreateBookController';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createBookController = new CreateBookController();

router.post('/register', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/book', createBookController.handle);

export { router };
