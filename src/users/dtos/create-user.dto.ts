import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserData {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  role: "ADMIN" | "USER";
}
