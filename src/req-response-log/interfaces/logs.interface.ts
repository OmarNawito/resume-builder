import { Document } from 'mongoose';

export interface Log extends Document {
  readonly resumeId: string;
  readonly request: object;
  readonly response: object;
}
