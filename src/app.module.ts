import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    UsersModule,
    AuthModule
    // ConfigModule.forRoot({
    //   validationSchema: Joi.object({
    //     //...
    //     JWT_SECRET: Joi.string().required(),
    //     JWT_EXPIRATION_TIME: Joi.string().required(),
    //   })
    // })
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
