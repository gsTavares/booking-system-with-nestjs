import { Space } from "src/spaces/space.entity";
import { User } from "src/users/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("bookings")
export class Booking {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;
  @ManyToOne(() => Space)
  @JoinColumn({ name: "space_id" })
  space: Space;
  @Column({ type: "timestamp" })
  start_time: Date;
  @Column({ type: "timestamp" })
  end_time: Date;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
