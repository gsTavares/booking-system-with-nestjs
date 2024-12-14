import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("spaces")
export class Space {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ length: 100 })
  name: string;
  @Column({ length: 255 })
  description: string;
  @Column({ type: "numeric", precision: 2 })
  price: number;
  @Column({ default: true })
  availability: boolean;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
