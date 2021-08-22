import { Router } from 'express';
import { booksRouter } from './books.router';
import { commentsRouter } from './comments.router';
import { followRouter } from './follow.router';
import { likesRouter } from './likes.routes';
import { loginRouter } from './login.router';
import { postsRouter } from './posts.routes';
import { registerRouter } from './user.router';

const router = Router();

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/follow', followRouter);
router.use('/books', booksRouter);
router.use('/likes', likesRouter);
router.use('/comments', commentsRouter);
router.use('/posts', postsRouter);

export { router };
