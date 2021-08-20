import {
  Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('posts')
class Post {
  @PrimaryColumn()
  readonly id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  user_sender: string

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userSender: User

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Post };
