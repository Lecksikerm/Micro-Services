import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinate, RiderCoordinateSchema } from './schemas/rider-coordinates.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: RiderCoordinate.name, schema: RiderCoordinateSchema }]),
    ClientsModule.register([
  {
    name: 'RIDER_SERVICE',
    transport: Transport.TCP,
    options: {
      host: process.env.RIDER_SERVICE_HOST || '127.0.0.1',
      port: parseInt(process.env.RIDER_SERVICE_PORT ?? '3000', 10),
        },
      },
    ]),
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}

