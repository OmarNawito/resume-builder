import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogDocument = Log & Document;

@Schema({ timestamps: true })
export class Log extends Document {
  @Prop({ required: true, type: String })
  resumeId: string;

  @Prop({ required: true, type: Object })
  request: string;

  @Prop({ required: true, type: {} })
  response: string;

  @Prop({
    required: true,
    default: Date.now,
    type: Date,
    index: { expires: 2592000 },
  })
  createdAt: {};
}

export const LogSchema = SchemaFactory.createForClass(Log);
