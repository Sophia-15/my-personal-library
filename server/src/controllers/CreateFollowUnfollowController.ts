import { Request, Response } from 'express';
import { CreateFollowUnfollowService } from '../services/CreateFollowUnfollowService';

class CreateFollowUnfollowController {
  async handle(req: Request, res: Response) {
    const { user_followed } = req.body;
    const { user_id } = req;

    const createFollowUnfollowService = new CreateFollowUnfollowService();

    const following = await createFollowUnfollowService.execute({ user_followed, user_following: user_id });

    return res.json(following);
  }
}

export { CreateFollowUnfollowController };
