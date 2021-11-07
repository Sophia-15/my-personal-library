import { Router } from 'express';
import { CreateBookController } from '../controllers/CreateBookController';
import { ListUserCreatedBooksController } from '../controllers/ListUserCreatedBooksController';
import { ensureAuthentication } from '../middlewares/ensureAuthentication';

const booksRouter = Router();

const createBookController = new CreateBookController();
const listUserCreatedBookController = new ListUserCreatedBooksController();

booksRouter.get('/:user_id', listUserCreatedBookController.handle);
booksRouter.post('/', ensureAuthentication, createBookController.handle);

export { booksRouter };
