import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFollowingSystem1629585966640 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'follow',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'user_following',
            type: 'uuid',
          },
          {
            name: 'user_followed',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'FKUserFollowing',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_following'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
          {
            name: 'FKUserFollowed',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_followed'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('follow');
  }
}
