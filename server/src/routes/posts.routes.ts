import { Router } from 'express';
import { CreatePostController } from '../controllers/CreatePostController';
import { ListAllPostController } from '../controllers/ListAllPostController';
import { ListUserCreatedPostsController } from '../controllers/ListUserCreatedPostsController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const postsRouter = Router();

const listUserCreatedPostController = new ListUserCreatedPostsController();
const listAllPostsController = new ListAllPostController();
const createPostController = new CreatePostController();

postsRouter.get('/:user_id', listUserCreatedPostController.handle);
postsRouter.get('/', listAllPostsController.handle);
postsRouter.post('/', ensureAuthentication, createPostController.handle);

export { postsRouter };
