import {
  Entity, PrimaryColumn, Column, JoinColumn, ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('books')
class Book {
  @PrimaryColumn()
  readonly id: string

  @Column()
  cover: string

  @Column()
  book_title: string

  @Column()
  publisher: string

  @Column()
  authors: string

  @Column()
  user_sender: string

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userSender: User

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Book };
