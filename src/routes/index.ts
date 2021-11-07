import { Router } from 'express';
import { booksRouter } from './books.routes';
import { commentsRouter } from './comments.routes';
import { followRouter } from './follow.routes';
import { likesRouter } from './likes.routes';
import { loginRouter } from './login.routes';
import { postsRouter } from './posts.routes';
import { userRouter } from './user.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/login', loginRouter);
router.use('/follow', followRouter);
router.use('/books', booksRouter);
router.use('/likes', likesRouter);
router.use('/comments', commentsRouter);
router.use('/posts', postsRouter);

export { router };
