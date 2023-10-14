import { Schema } from 'mongoose';

/* eslint-disable no-unused-vars */
export enum TOURISM_SERVICE_STATUS_ENUM {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export type ITourismService = {
  title: string;
  price: number;
  status: TOURISM_SERVICE_STATUS_ENUM;
  description: string;
  category: Schema.Types.ObjectId;
};

export type ITourismServiceSearch = { searchTerm?: string };
