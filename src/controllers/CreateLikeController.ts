import { Request, Response } from 'express';
import { CreateLikeService } from '../services/CreateLikeService';

class CreateLikeController {
  async handle(req: Request, res: Response) {
    const { post_liking } = req.body;
    const { user_id } = req;

    const createLikeService = new CreateLikeService();

    const like = await createLikeService.execute({ user_liking: user_id, post_liking });

    return res.json(like);
  }
}

export { CreateLikeController };
