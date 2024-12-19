import { Module } from "@nestjs/common";
import { SpacesService } from "./spaces.service";
import { SpacesController } from "./spaces.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Space } from "./space.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Space])],
  providers: [SpacesService],
  controllers: [SpacesController],
})
export class SpacesModule {}
