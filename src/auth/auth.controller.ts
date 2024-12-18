import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreateUserData } from "src/users/dtos/create-user.dto";
import { AuthService } from "./auth.service";
import { LoginUserData } from "src/users/dtos/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async login(@Body() body: LoginUserData) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException("Invalid Credentials");
    }
    return this.authService.login(user);
  }

  @Post("register")
  async register(@Body() body: CreateUserData) {
    const result = await this.authService.register(body);
    const { id, name, email, role, created_at } = result;
    return { id, name, email, role, created_at };
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("profile")
  getProfile(@Request() req: { user: { userId: string; email: string } }) {
    return req.user;
  }
}
