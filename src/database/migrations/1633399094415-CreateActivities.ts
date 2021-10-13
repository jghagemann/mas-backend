import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActivities1633399094415 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "activities",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "activity_date",
            type: "varchar",
          },
          {
            name: "courseUnitId",
            type: "varchar",
          },
          {
            name: "grade",
            type: "decimal",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("activities");
  }
}
