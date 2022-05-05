import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type ResumeDocument = Resume & Document;

@Schema()
export class Education {
  @Prop()
  SchoolName: string;
  @Prop()
  SchoolLocation: string;
  @Prop()
  startMonth: Date;
  @Prop()
  endMonth: Date;
  @Prop()
  startYear: Date;
  @Prop()
  endYear: Date;
  @Prop()
  degree: string;
  @Prop()
  fieldOfStudy: string;
  @Prop()
  description: string;
}

const EducationSchema = SchemaFactory.createForClass(Education);

@Schema()
export class Experience {
  @Prop()
  position: string;
  @Prop()
  companyName: string;
  @Prop()
  startMonth: Date;
  @Prop()
  endMonth: Date;
  @Prop()
  startYear: Date;
  @Prop()
  endYear: Date;
}

const ExperienceSchema = SchemaFactory.createForClass(Experience);

@Schema({timestamps: true})
export class Resume extends Document {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
      })
      user?: User;

    @Prop({ required: true, unique: true, type: String })
    firstName: string;

    @Prop({ required: true, unique: true, type: String })
    lastName: string;

    @Prop({ required: true, type: String })
    sureName: string;
    
    @Prop({ type: String, required: true })
    email: string;

    @Prop({ type: String, required: true })
    city: string;

    @Prop({ type: String, required: true })
    country: string;

    @Prop({ type: String, required: true })
    zipCode: string;

    @Prop({ type: String, required: true })
    phone: string;

    @Prop({type: [EducationSchema] })
    educations: Education[];

    @Prop({type: [ExperienceSchema] })
    experiences: Experience[]

    @Prop({ type: [String], required: true})
    skills: string[]

    @Prop(raw({
        linkedin: { type: String },
        twitter: { type: String }
      }))
      social: Record<string, any>;

    @Prop({ type: Date, default: Date.now })
    date: Date;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);