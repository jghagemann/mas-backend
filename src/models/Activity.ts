import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { CourseUnit } from "./CourseUnit";

@Entity("activities")
class Activity {

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  activity_date: string;

  @Column()
  courseUnitId: string;

  @Column()
  grade: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => CourseUnit, course_unit => course_unit.activities)
  @JoinColumn()
  course_unit: CourseUnit;
}

export { Activity };
