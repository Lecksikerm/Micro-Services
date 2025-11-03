import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinateDto } from './dto/create-cordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates() {
        return 'Hello, I am from rider coordinates';
    }
   @Post()
   saveRiderCoordinate(
    @Body() createRiderCoordinateDto: CreateCoordinateDto) {
        return createRiderCoordinateDto;
    }
}