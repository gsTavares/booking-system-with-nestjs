import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 100 })
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column({ default: "USER" })
  role: string;
  @CreateDateColumn()
  created_at: string;
  @UpdateDateColumn()
  updated_at: string;
}
