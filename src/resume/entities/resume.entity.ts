import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

export type ResumeDocument = Resume & Document;

@Schema()
export class Education {
  @Prop()
  collegeName: string;

  @Prop()
  collegeLocation: string;

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
  companyName: string;
  @Prop()
  jobTitle: string;
  @Prop()
  jobLocation: string;
  @Prop()
  jobResponsibilities: string[];
  @Prop()
  startDate: string;
  @Prop()
  endDate: string;
}

const ExperienceSchema = SchemaFactory.createForClass(Experience);
@Schema()
export class Skills {
  @Prop()
  name: string;
  @Prop()
  details: string[];
}

const SkillsSchema = SchemaFactory.createForClass(Skills);
@Schema()
export class Projects {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  linkToProject: string;
  @Prop()
  toolsUsed: string[];
}

const ProjectsSchema = SchemaFactory.createForClass(Projects);
@Schema()
export class Awards {
  @Prop()
  name: string;
  @Prop()
  date: string;
  @Prop()
  awarder: string;
  @Prop()
  summary: string;
}

const AwardsSchema = SchemaFactory.createForClass(Awards);

@Schema({ timestamps: true })
export class Resume extends Document {
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
  address: string;

  @Prop({ type: String, required: true })
  country: string;

  @Prop({ type: String, required: true })
  zipCode: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: [EducationSchema], required: true })
  educations: Education[];

  @Prop({ type: [ExperienceSchema], required: true })
  experiences: Experience[];

  @Prop({ type: [SkillsSchema], required: true })
  skills: Skills[];

  @Prop({ type: [ProjectsSchema], required: true })
  projects: Projects[];

  @Prop({ type: [AwardsSchema], required: true })
  awards: Awards[];

  @Prop(
    raw({
      linkedin: { type: String },
      twitter: { type: String },
    }),
  )
  social: Record<string, any>;

  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const ResumeSchema = SchemaFactory.createForClass(Resume);
