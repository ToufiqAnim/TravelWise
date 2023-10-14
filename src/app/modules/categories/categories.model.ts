import { Schema, model } from 'mongoose';
import { ICategory } from './categories.interface';

const categorySchema = new Schema<ICategory>(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category = model<ICategory>('Category', categorySchema);
