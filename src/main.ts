import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './config/db/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // NestJS config
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  await app.listen(3000);
}
bootstrap();
