import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'
import { UpdatePersonalDetailsDto } from 'src/resume/dto/update-personalDetails.dto'
import { UpdateEducationDto } from 'src/resume/dto/update-education.dto'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('/ (GET)', async () => {
    return await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!')
  })
  it('/resume/personal-details/resumeId (PATCH)', async () => {
    const personalDetails: UpdatePersonalDetailsDto = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'o_mohsen@hotmail.com',
      phone: '+972-5-972-972',
      address: '123, Street, City, Country',
      sureName: 'nawito',
      city: '6 october',
      country: 'Egypt',
      zipCode: '12345'
    }
    return await request(app.getHttpServer())
      .patch('/resume/personal-details/1234')
      .send(personalDetails)
      .expect(200)
  })

  it('/resume/education/resumeId (PATCH)', async () => {
    const educationData: UpdateEducationDto = {
      educations: [
        {
          collegeName: 'collegeName',
          degree: 'degree',
          collegeLocation: 'collegeLocation',
          startDate: 'startDate',
          endDate: 'endDate',
          gpa: 'gpa',
          major: 'major'
        }
      ]
    }
    return await request(app.getHttpServer())
      .patch('/resume/education/1234')
      .send(educationData)
      .expect(200)
  })
  afterAll(async () => {
    await app.close()
  })
})
