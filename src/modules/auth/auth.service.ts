import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/shared/services/user.service';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { UserEntity } from 'src/modules/users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {

    }
    public async register(user: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(user.email, 10);
          const createdUser = await this.userService.createUser(user);
      }
    public async getAuthenticateUser(name: string, hashedPassword: string ) {
          let user = new UserEntity();
          user.name = name;
          user.email = hashedPassword;
          return await this.userService.user(user);      
        }
}
