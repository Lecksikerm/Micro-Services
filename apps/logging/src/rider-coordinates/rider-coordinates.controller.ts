import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinateDto } from './dto/create-cordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private readonly riderCoordinatesService: RiderCoordinatesService) {}

  @Get('all')
  getAllCoordinates() {
    return this.riderCoordinatesService.getAllCoordinates();
  }

  @Post()
  async saveRiderCoordinate(
    @Body() createRiderCoordinateDto: CreateCoordinateDto,
  ) {
    return await this.riderCoordinatesService.saveRiderCoordinates(createRiderCoordinateDto);
  }

  @Get(':riderId')
  async getRiderCoordinates(@Param('riderId') riderId: string) {
    return await this.riderCoordinatesService.getRiderCoordinates(riderId);
  }
}
