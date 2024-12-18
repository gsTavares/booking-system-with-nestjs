import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { UsersService } from "./users.service";
import { Roles } from "src/auth/decorators/roles.decorator";

@Controller("users")
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles("admin")
  async findAll() {
    return this.usersService.findAll();
  }

  @Patch(":id/role")
  @Roles("admin")
  async updateRole(
    @Request() req: { user: { userId: string } },
    @Param("id") userId: string,
    @Body("role") newRole: string,
  ) {
    if (req.user.userId === userId) {
      throw new HttpException(
        "Cannot change your own role",
        HttpStatus.FORBIDDEN,
      );
    }
    if (!["admin", "user"].includes(newRole.toLowerCase())) {
      throw new HttpException("Invalid role", HttpStatus.BAD_REQUEST);
    }
    const result = await this.usersService.updateRole(userId, newRole);
    const { id, name, email, role, created_at, updated_at } = result;
    return { id, name, email, role, created_at, updated_at };
  }
}
