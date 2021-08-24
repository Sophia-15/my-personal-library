import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateComments1629651245775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'comment_body',
            type: 'varchar',
          },
          {
            name: 'post_id',
            type: 'uuid',
          },
          {
            name: 'user_commenting',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKUserCommentingPosts',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_commenting'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKPostCommented',
            referencedTableName: 'posts',
            referencedColumnNames: ['id'],
            columnNames: ['post_id'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('comments');
  }
}
