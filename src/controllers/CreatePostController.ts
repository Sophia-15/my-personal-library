import { Request, Response } from 'express';
import { CreatePostService } from '../services/CreatePostService';

class CreatePostController {
  async handle(req: Request, res: Response) {
    const {
      title, description, user_sender,
    } = req.body;

    const createPostService = new CreatePostService();

    const post = await createPostService.execute({
      title, description, user_sender,
    });

    return res.json(post);
  }
}

export { CreatePostController };
