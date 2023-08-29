import { IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  id: number;
  @Length(3, 40)
  username: string;
  @IsNotEmpty()
  @Length(6, 20)
  password: string;
  avatar: string;
  avatarName: string;
}
export class UpdateUserDto {
  @IsNotEmpty()
  id: number;
  @Length(3, 40)
  username?: string;
  @IsNotEmpty()
  @Length(6, 20)
  password?: string;
  avatar?: string;
  avatarName?: string;
}
