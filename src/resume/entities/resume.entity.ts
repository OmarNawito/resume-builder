import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/entities/user.entity';

export type ResumeDocument = Resume & Document;

@Schema()
export class Education {
  @Prop()
  CollegeName: string;
  @Prop()
  CollegeLocation: string;
  @Prop()
  degree: string;
  @Prop()
  major: string;
  @Prop()
  gpa: string;
  @Prop()
  startDate: string;
  @Prop()
  endDate: string;
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

    @Prop({ required: true, type: String })
    resumeId: string;

    @Prop({ required: true, type: String })
    firstName: string;

    @Prop({ required: true, type: String })
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