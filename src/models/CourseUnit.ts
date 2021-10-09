import { Column, CreateDateColumn, Entity, OneToMany,  PrimaryColumn,  UpdateDateColumn } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Activity } from "./Activity";

@Entity("course_units")
class CourseUnit {

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }

  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Activity, activity => activity.course_unit)
  activities: Activity[]
}

export { CourseUnit };
