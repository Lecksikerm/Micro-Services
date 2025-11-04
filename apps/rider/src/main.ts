import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.RIDER_SERVICE_HOST || '127.0.0.1',
        port: parseInt(process.env.RIDER_SERVICE_PORT ?? '3000', 10),

      },
    },
  );

  await app.listen(); 
  console.log(`Rider microservice is listening on ${process.env.RIDER_SERVICE_HOST || '127.0.0.1'}:${process.env.RIDER_SERVICE_PORT || 3000}`);
}
bootstrap();

