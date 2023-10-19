import { Schema, Types, model } from 'mongoose';
import { ICart } from './cart.interface';

const cartSchema = new Schema<ICart>(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    service: { type: Types.ObjectId, ref: 'TourismService', required: true },
  },
  { timestamps: true }
);

export const Cart = model<ICart>('Cart', cartSchema);
