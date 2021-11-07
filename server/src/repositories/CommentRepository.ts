import { Repository, EntityRepository } from 'typeorm';
import { Comments } from '../entities/Comments';

@EntityRepository(Comments)
class CommentRepository extends Repository<Comments> {
}

export { CommentRepository };
