import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateLikes1629284976058 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'likes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'user_liking',
            type: 'uuid',
          },
          {
            name: 'post_liking',
            type: 'uuid',
          },
        ],

        foreignKeys: [
          {
            name: 'FKUserLikingPosts',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_liking'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKPostLiked',
            referencedTableName: 'posts',
            referencedColumnNames: ['id'],
            columnNames: ['post_liking'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('likes');
  }
}
