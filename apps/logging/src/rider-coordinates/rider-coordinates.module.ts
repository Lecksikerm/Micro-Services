import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';

@Module({
  controllers: [RiderCoordinatesController]
})
export class RiderCoordinatesModule {}
