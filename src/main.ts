import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PrismaService } from './modules/persistance/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // NestJS config
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)

  // Swagger config 
  const config = new DocumentBuilder()
    .setTitle('co-location-sn')
    .setDescription('The co-location-sn API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
