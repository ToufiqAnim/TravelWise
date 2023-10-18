import { Schema, Types, model } from 'mongoose';
import { IFeedback } from './feedback.interface';

const feedbackSchema = new Schema<IFeedback>(
  {
    user: { type: Types.ObjectId, ref: 'User', required: true },
    service: {
      type: Types.ObjectId,
      ref: 'TourismService',
      required: true,
    },
    feedback: { type: String, required: true },
  },
  { timestamps: true }
);

export const Feedback = model<IFeedback>('Feedback', feedbackSchema);
