import { Inject, Injectable } from "@nestjs/common";
import { CreateCoordinateDto } from "./dto/create-cordinates.dto";
import { RiderCoordinate, RiderCoordinateDocument } from "./schemas/rider-coordinates.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel: Model<RiderCoordinateDocument>,
        @Inject('RIDER_SERVICE') private client: ClientProxy
    ) {}

    async saveRiderCoordinates(createCoordinateDto: CreateCoordinateDto) {
        const createdCoordinate = new this.riderCoordinateModel(createCoordinateDto);
        return await createdCoordinate.save(); 
    }

  async getRiderCoordinates(riderId: string) {
  const coordinates = await this.riderCoordinateModel.find({ riderId }).exec();

  const pattern = { cmd: 'get_rider' };
  const payload = { id: riderId };
  const rider = await firstValueFrom(this.client.send(pattern, payload));

  return { coordinates, rider };
}

    async getAllCoordinates() {
    return await this.riderCoordinateModel.find().exec();
  }
}
