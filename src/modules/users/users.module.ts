import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PersistenceModule } from '../persistance/persistence.module';

@Module({
  imports: [PersistenceModule],
  controllers: [UsersController],
  providers: [UsersService], 
  exports: [UsersService]
})
export class UsersModule {}
