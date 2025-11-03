import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';

async function bootstrap() {
  const app = await NestFactory.create(RiderServiceModule);
  await app.listen(process.env.port ?? 4000);
}
bootstrap();
