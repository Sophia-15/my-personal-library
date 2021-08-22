import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateBookController } from './controllers/CreateBookController';
import { CreatePostController } from './controllers/CreatePostController';
import { CreateLikeController } from './controllers/CreateLikeController';
import { ensureAuthentication } from './middlewares/ensureAuthentication';
import { ListUserCreatedBooksController } from './controllers/ListUserCreatedBooksController';
import { ListUserCreatedPostsController } from './controllers/ListUserCreatedPostsController';
import { ListAllPostController } from './controllers/ListAllPostController';
import { CreateFollowUnfollowController } from './controllers/CreateFollowUnfollowController';
import { ListPostLikesController } from './controllers/ListPostLikesController';

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createBookController = new CreateBookController();
const createPostController = new CreatePostController();
const createLikeController = new CreateLikeController();
const listUserCreatedBookController = new ListUserCreatedBooksController();
const listUserCreatedPostController = new ListUserCreatedPostsController();
const listAllPostsController = new ListAllPostController();
const createFollowUnfollowController = new CreateFollowUnfollowController();
const listPostLikesController = new ListPostLikesController();

router.post('/register', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/book', ensureAuthentication, createBookController.handle);
router.post('/post', ensureAuthentication, createPostController.handle);
router.post('/like', ensureAuthentication, createLikeController.handle);
router.post('/follow', ensureAuthentication, createFollowUnfollowController.handle);

router.get('/user/books', ensureAuthentication, listUserCreatedBookController.handle);
router.get('/user/posts', ensureAuthentication, listUserCreatedPostController.handle);
router.get('/posts', listAllPostsController.handle);
router.get('/likes/:post_id', listPostLikesController.handle);

export { router };
