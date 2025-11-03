import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  //@Get('/:id')
  @MessagePattern({ cmd: 'get_rider' })
  async getRiderById(
    data: any,
  ) {
    return Promise.resolve({
      _id: data.id,
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
  }
}
