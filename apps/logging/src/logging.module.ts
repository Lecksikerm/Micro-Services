import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';
import { config } from 'dotenv';

config(); 

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI as string),
    RiderCoordinatesModule,
  ],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}

