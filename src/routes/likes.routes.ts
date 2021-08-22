import { Router } from 'express';
import { CreateLikeController } from '../controllers/CreateLikeController';
import { ListPostLikesController } from '../controllers/ListPostLikesController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const likesRouter = Router();

const listPostLikesController = new ListPostLikesController();
const createLikeController = new CreateLikeController();

likesRouter.get('/:post_id', ensureAuthentication, listPostLikesController.handle);
likesRouter.post('/', ensureAuthentication, createLikeController.handle);

export { likesRouter };
