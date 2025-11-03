import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";



export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;

@Schema()
export class RiderCoordinate {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  riderId: string;
}

export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate);


