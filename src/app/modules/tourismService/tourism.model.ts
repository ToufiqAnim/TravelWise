import { Schema, Types, model } from 'mongoose';
import {
  ITourismService,
  TOURISM_SERVICE_STATUS_ENUM,
} from './tourism.interface';

const tourismServiceSchema = new Schema<ITourismService>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, default: TOURISM_SERVICE_STATUS_ENUM.UNAVAILABLE },
    description: { type: String, required: true },
    category: { type: Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true }
);

export const TourismService = model<ITourismService>(
  'ToursimService',
  tourismServiceSchema
);
