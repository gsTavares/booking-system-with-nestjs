import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Roles } from "src/auth/decorators/roles.decorator";
import { RolesGuard } from "src/auth/guards/roles.guard";

@Controller("spaces")
@UseGuards(AuthGuard("jwt"), RolesGuard)
export class SpacesController {
  @Post("create")
  @Roles("admin")
  async test() {
    return "Authorized!";
  }
}
