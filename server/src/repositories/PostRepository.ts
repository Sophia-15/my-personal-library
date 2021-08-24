import { Repository, EntityRepository } from 'typeorm';
import { Post } from '../entities/Post';

@EntityRepository(Post)
class PostRepository extends Repository<Post> {
}

export { PostRepository };
