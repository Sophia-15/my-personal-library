import { Request, Response } from 'express';
import { CreatePostService } from '../services/CreatePostService';

class CreatePostController {
  async handle(req: Request, res: Response) {
    const {
      title, description,
    } = req.body;

    const { user_id } = req;

    const createPostService = new CreatePostService();

    const post = await createPostService.execute({
      title, description, user_sender: user_id,
    });

    return res.json(post);
  }
}

export { CreatePostController };
