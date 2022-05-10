import { UpdateEducationDto } from './dto/update-education.dto';
import { AppModule } from './../app.module';
import { Test, TestingModule } from '@nestjs/testing';
import { ResumeService } from './resume.service';
import { createTestConfiguration } from '../../test/db';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Resume } from './entities/resume.entity';
import { Repository } from 'typeorm';
import { UpdatePersonalDetailsDto } from './dto/update-personalDetails.dto';

describe('ResumeService', () => {
  let module: TestingModule;
  let service: ResumeService;
  let repository: Repository<Resume>;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        AppModule,
        TypeOrmModule.forRoot(createTestConfiguration([Resume])),
        TypeOrmModule.forFeature([Resume]),
      ],
    }).compile();

    service = module.get<ResumeService>(ResumeService);
    repository = module.get<Repository<Resume>>(getRepositoryToken(Resume));
  });

  afterAll(() => {
    module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Personal Details', () => {
    it('should update personal details', async () => {
      const personalDetails: UpdatePersonalDetailsDto = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'o_mohsen@hotmail.com',
        phone: '+972-5-972-972',
        address: '123, Street, City, Country',
        sureName: 'nawito',
        city: '6 october',
        country: 'Egypt',
        zipCode: '12345',
      };
      const result = await service.updatePersonalDetails(
        '5e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f',
        personalDetails,
      );
      expect(result).toMatchObject(personalDetails);
    });
  });

  describe('Education', () => {
    it('should update education', async () => {
      const educationData: UpdateEducationDto = {
        educations: [
          {
            collegeName: 'collegeName',
            degree: 'degree',
            collegeLocation: 'collegeLocation',
            startDate: 'startDate',
            endDate: 'endDate',
            gpa: 'gpa',
            major: 'major',
          },
        ],
      };
      const result = await service.updateEducation(
        '5e9f8f8f8f8f8f8f8f8f8f8f8f8f8f8f',
        educationData,
      );
      expect(result).toMatchObject(educationData);
    });
  });

  describe('Generate pdf', () => {
    it('should convert html to pdf', async () => {
      const style = '<style>body { font-family: sans-serif; }</style>';
      const resume = '<h1>Sample resume</h1>';
      const result = await service.resumePdf(style, resume);
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
