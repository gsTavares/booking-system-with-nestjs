import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Booking } from "./bookings/booking.entity";
import { Space } from "./spaces/space.entity";
import { User } from "./users/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postdba",
      database: "booking_system",
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      entities: [User, Space, Booking],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
