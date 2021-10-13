import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddCourseUnitsActivitiesForeignKey1633483305562 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey("activities", new TableForeignKey({
      name: "fk_course_units_activities",
      columnNames:["courseUnitId"],
      referencedColumnNames:["id"],
      referencedTableName: "course_units",
      onDelete: "SET NULL",
      onUpdate: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("activities", "fk_course_units_activities")
  }
}
