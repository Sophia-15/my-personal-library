import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Post } from './Post';
import { User } from './User';

@Entity('comments')
class Comments {
  @PrimaryColumn()
  readonly id: string

  @Column()
  comment_body: string

  @Column()
  post_id: string

  @Column()
  user_commenting: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @JoinColumn({ name: 'post_id' })
  @ManyToOne(() => Post)
  postCommenting: Post

  @JoinColumn({ name: 'user_commenting' })
  @ManyToOne(() => User)
  userCommenting: User

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Comments };
