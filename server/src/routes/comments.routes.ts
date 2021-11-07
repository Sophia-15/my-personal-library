import { Router } from 'express';
import { CreateCommentController } from '../controllers/CreateCommentController';
import { ListPostCommentsController } from '../controllers/ListPostCommentsController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const commentsRouter = Router();

const createCommentController = new CreateCommentController();
const listPostCommentsController = new ListPostCommentsController();

commentsRouter.get('/posts/:post_id', listPostCommentsController.handle);
commentsRouter.post('/', ensureAuthentication, createCommentController.handle);

export { commentsRouter };
