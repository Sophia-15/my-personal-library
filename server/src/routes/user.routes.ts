import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUserInfoController } from '../controllers/ListUserInfoController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const userRouter = Router();

const createUserController = new CreateUserController();
const listUserInfoController = new ListUserInfoController();

userRouter.post('/register', createUserController.handle);
userRouter.get('/profile', listUserInfoController.handle);

export { userRouter };
