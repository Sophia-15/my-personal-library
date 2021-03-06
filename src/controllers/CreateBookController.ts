import { Request, Response } from 'express';
import { CreateBookService } from '../services/CreateBookServices';

class CreateBookController {
  async handle(req: Request, res: Response) {
    const {
      book_title, authors, publisher, cover,
    } = req.body;

    const { user_id } = req;

    const createBookService = new CreateBookService();

    const book = await createBookService.execute({
      book_title, authors, publisher, user_sender: user_id, cover,
    });

    return res.json(book);
  }
}

export { CreateBookController };
