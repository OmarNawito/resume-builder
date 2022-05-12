# Resume Builder Backend

This is a project done for Dalia interview. Please find the instructions [here](https://github.com/OmarNawito/resume-builder/wiki/Dalia-Assignment#resume-builder-backend).

## Teck Stack

The project is build with [Nestjs](https://nestjs.com/). It uses [jest](https://jestjs.io/) [mongo](https://www.mongodb.com/) [react](https://reactjs.org/)
## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your machine
- An up-to-date release of [NodeJS](https://nodejs.org/) and NPM
- A latest Mongo database. You may use the provided `docker-compose` file.

### 1.2 Project configuration

Start by cloning this project on your machine.

``` sh
git clone https://github.com/OmarNawito/resume-builder.git
```

The next thing will be to install all the dependencies of the project.

```bash
cd ./resume-builder
npm install
```

Once the dependencies are installed, you can now configure your project by creating a new `.env` file containing your environment variables used for development.

```
cp .env.example .env
```

Run the following command to start the Docker Container

```bash
docker-compose up -d
```
or Run `$ npm run start:dev`

### 1.3 Available scripts

#### Run app locally
You can run the application locally by using `npm run start`.

#### Test
You can run the tests of the application with `npm run test`

#### Test with watch
You can run the tests of the application and enable watching for any updates with `npm run test:watch`

#### Test with coverage

You can run the tests of the application and generate a coverage report with `test:cov`

The report can be found in the `/coverage/` folder.

#### E2E Tests

You can run the End to End Testing of the application with `npm run test:e2e`
#### Build

You can build the application in production mode with `npm run build`

### 1.4 Start Client

```sh
cd ./client
npm install
npm start
```

## 1.5 Testing

Using no sql database for testing

Run `npm start test`

## 1.6 Swagger API docs

Already integrated API documentation. To see all available endpoints visit http://localhost:4000/api

## 1.7 Public API

### Update Personal Details

`POST http://localhost:4000/api/resume/personal-details/qtunfuj`

Set the header as follows:

```
"Content-Type": "application/json"
"Accept": "application/json"
```

#### Body

```
{
    "phone": "01221055446",
    "zipCode": 123,
    "country": "Egypt",
    "city": "6 october",
    "email": "o@hotmail.com",
    "sureName": "nawito",
    "lastName": "nawito",
    "firstName": "Omar",
    "address": "6 october"
}
```

#### Response

##### Success

`200 OK`
### Update Education Details

`POST ttp://localhost:4000/api/resume/education/qtunfuj`

Set the header as follows:

```
"Content-Type": "application/json"
"Accept": "application/json"
```

#### Body

```
{
    "educations": [
        {
            "collegeName": "Misr University for science and technology",
            "collegeLocation": "nasr city",
            "degree": "cs",
            "major": "Computer Science",
            "gpa": "5.5",
            "startDate": "june 2017",
            "endDate": "may 2021"
        },
        {
            "collegeName": "Misr University for science and technology",
            "collegeLocation": "nasr city",
            "degree": "cs",
            "major": "Computer 2333",
            "gpa": "5.5",
            "startDate": "june 2017",
            "endDate": "may 2021"
        }
    ]
}
```

#### Response

##### Success

`200 OK`
### Update Experience Details

`POST http://localhost:4000/api/resume/experience/qtunfuj`

Set the header as follows:

```
"Content-Type": "application/json"
"Accept": "application/json"
```

#### Body

```
{
    "experiences": [
        {
            "companyName": "Dalia labs",
            "jobTitle": "Senior Solution Developer",
            "jobLocation": "6 october",
            "jobResponsibilities": ["Backend Enginner"],
            "startDate": "june 2017",
            "endDate": "may 2021"
        },
        {
            "companyName": "4deve",
            "jobTitle": "Senior Solution Developer",
            "jobLocation": "6 october",
            "jobResponsibilities": ["Backend Enginner"],
            "startDate": "june 2017",
            "endDate": "may 2021"
        }
    ]
}
```

#### Response

##### Success

`200 OK`
### Update Skills Details

`POST http://localhost:4000/api/resume/skills/qtunfuj`

Set the header as follows:

```
"Content-Type": "application/json"
"Accept": "application/json"
```

#### Body

```
{
    "skills": [
        {
            "name": "Javascript",
            "details": ["react"]
        },
        {
            "name": "php",
            "details": ["laravel"]
        }
    ]
}
```

#### Response

##### Success

`200 OK`
### Update Projects Details

`POST http://localhost:4000/api/resume/projects/qtunfuj`

Set the header as follows:

```
"Content-Type": "application/json"
"Accept": "application/json"
```

#### Body

```
{
    "projects": [
        {
            "name": "LangChat",
            "description": "Mobile Application",
            "linkToProject": "asd",
            "toolsUsed": ["react, redux, firebase"]
        },
        {
            "name": "Swaps",
            "description": "Mobile Application",
            "linkToProject": "asd",
            "toolsUsed": ["react, redux, firebase"]
        }
    ]
}
```

#### Response

##### Success

`200 OK`

### Update Awards Details

`POST http://localhost:4000/api/resume/awards/1234`

Set the header as follows:

```
"Content-Type": "application/json"
"Accept": "application/json"
```

#### Body

```
{
    "awards": [
        {
            "name": "Best Developer",
            "date ": "Sep 2020",
            "awarder": "google",
            "summary": "best developer",
            "date": "june 2017"
        },
        {
            "name": "Best Developer",
            "date ": "Sep 2020",
            "awarder": "google",
            "summary": "best developer",
            "date": "june 2017"
        }
    ]
}
```

#### Response

##### Success

`200 OK`

# TODO

## BACKEND

- [ ] Add authentication Module
- [ ] Cache resume data using redis
- [ ] Handle PDF file name with random string
- [ ] Send resume by email 

## CLIENT

- [ ] Get my resumes
- [ ] Add many templates
- [ ] Add custom section 
- [ ] Render updates while the user typing in the preview template ( real time )
- [ ] Add authentication components
- [ ] Adding date picker 
- [ ] Make resume validation
- [ ] Add many resumes 
