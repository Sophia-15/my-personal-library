import { Request, Response } from 'express';
import { CreateLikeService } from '../services/CreateLikeService';

class CreateLikeController {
  async handle(req: Request, res: Response) {
    const { user_liking, post_liking } = req.body;

    const createLikeService = new CreateLikeService();

    const like = await createLikeService.execute({ user_liking, post_liking });

    return res.json(like);
  }
}

export { CreateLikeController };
