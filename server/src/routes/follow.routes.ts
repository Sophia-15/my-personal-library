import { Router } from 'express';
import { CreateFollowUnfollowController } from '../controllers/CreateFollowUnfollowController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const followRouter = Router();

const createFollowUnfollowController = new CreateFollowUnfollowController();

followRouter.post('/', ensureAuthentication, createFollowUnfollowController.handle);

export { followRouter };
