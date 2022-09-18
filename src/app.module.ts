import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './modules/persistance/prisma/prisma.service';
import { PostService } from './modules/shared/services/post.service';
import { UserService } from './modules/shared/services/user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, PostService, PrismaService],
})
export class AppModule {}
