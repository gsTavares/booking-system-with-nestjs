import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { CreateSpaceDto } from "./dtos/create-space.dto";
import { SpacesService } from "./spaces.service";
import { Roles } from "src/auth/decorators/roles.decorator";
import { UpdateSpaceDto } from "./dtos/update-space.dto";

@Controller("spaces")
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class SpacesController {
  constructor(private readonly spacesService: SpacesService) {}

  @Post()
  @Roles("admin")
  async create(@Body() spaceData: CreateSpaceDto) {
    return this.spacesService.create(spaceData);
  }

  @Get()
  async findAll() {
    return this.spacesService.findAll();
  }

  @Patch(":id")
  @Roles("admin")
  async update(
    @Param("id") spaceId: string,
    @Body() spaceData: UpdateSpaceDto,
  ) {
    return this.spacesService.update(spaceId, spaceData);
  }

  @Delete(":id")
  @Roles("admin")
  async delete(@Param("id") spaceId: string) {
    return this.spacesService.delete(spaceId);
  }
}
