import {
  Column, Entity, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Post } from './Post';
import { User } from './User';

@Entity('likes')
class Likes {
  @PrimaryColumn()
  id: string

  @Column()
  user_liking: string

  @JoinColumn({ name: 'user_liking' })
  @ManyToOne(() => User)
  userLiking: User

  @Column()
  post_liking: string

  @JoinColumn({ name: 'post_liking' })
  @ManyToOne(() => Post)
  postLiking: Post

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Likes };
