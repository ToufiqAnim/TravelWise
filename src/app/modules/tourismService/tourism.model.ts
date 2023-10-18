import { Schema, Types, model } from 'mongoose';
import {
  ITourismService,
  TOURISM_SERVICE_STATUS_ENUM,
} from './tourism.interface';

const tourismServiceSchema = new Schema<ITourismService>(
  {
    title: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    maxGroupSize: { type: Number, required: true },
    image: { type: String, required: true },
    status: { type: String, default: TOURISM_SERVICE_STATUS_ENUM.UNAVAILABLE },
    featured: {
      type: Boolean,
      default: false,
    },
    review: { type: Types.ObjectId, ref: 'review' },
  },
  { timestamps: true }
);

export const TourismService = model<ITourismService>(
  'ToursimService',
  tourismServiceSchema
);
