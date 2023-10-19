import { Schema } from 'mongoose';

/* eslint-disable no-unused-vars */
export enum TOURISM_SERVICE_STATUS_ENUM {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export type ITourismService = {
  title: string;
  city: string;
  distance: string;
  price: number;
  maxGroupSize: number;
  image: string;
  status: TOURISM_SERVICE_STATUS_ENUM;
  description: string;
  featured: boolean;
  review: Schema.Types.ObjectId;
};

export type ITourismServiceSearch = { searchTerm?: string };
