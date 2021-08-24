import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBooks1629127550288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'cover',
            type: 'varchar',
          },
          {
            name: 'book_title',
            type: 'varchar',
          },
          {
            name: 'publisher',
            type: 'varchar',
          },
          {
            name: 'authors',
            type: 'varchar',
          },
          {
            name: 'user_sender',
            type: 'uuid',
          },
        ],

        foreignKeys: [
          {
            name: 'FKUserSenderBook',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_sender'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}
