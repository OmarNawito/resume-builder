const exportedObject = {
  Profile: {
    name: 'Profile',
    heading: '',
    extra: false,
    sections: [
      {
        Name: { required: true, value: '', placeHolder: 'Name', type: 'text' },
        Email: {
          required: true,
          value: '',
          placeHolder: 'Email',
          type: 'email'
        },
        Mobile: {
          required: true,
          value: '',
          placeHolder: 'Mobile',
          type: 'text'
        },
        Protofolio: { value: '', placeHolder: 'Link', type: 'text' },
        LinkedIn: { value: '', placeHolder: 'Link', type: 'text' },
        Address: { value: '', placeHolder: 'Address', type: 'text' }
      }
    ]
  },
  Education: {
    name: 'Education',
    heading: '',
    extra: true,
    sections: [
      {
        collegeName: {
          required: true,
          value: '',
          placeHolder: 'Name',
          type: 'text'
        },
        collegeLocation: {
          required: true,
          value: '',
          placeHolder: 'Stanford, CA',
          type: 'text'
        },
        degree: { required: true, value: '', placeHolder: 'BS', type: 'text' },
        major: {
          required: true,
          value: '',
          placeHolder: 'Computer Science',
          type: 'text'
        },
        gpa: { required: true, value: '', placeHolder: '5.5', type: 'text' },
        startDate: {
          required: true,
          value: '',
          placeHolder: 'June 2017',
          type: 'text'
        },
        endDate: {
          required: true,
          value: '',
          placeHolder: 'May 2021',
          type: 'text'
        }
      }
    ]
  },
  Work: {
    name: 'Work',
    heading: '',
    extra: true,
    sections: [
      {
        companyName: {
          required: true,
          value: '',
          placeHolder: 'Google',
          type: 'text'
        },
        jobTitle: {
          required: true,
          value: '',
          placeHolder: 'Software Engineer',
          type: 'text'
        },
        jobLocation: {
          required: true,
          value: '',
          placeHolder: 'Mountain View, CA',
          type: 'text'
        },
        startDate: {
          required: true,
          value: '',
          placeHolder: 'June 2017',
          type: 'text'
        },
        endDate: {
          required: true,
          value: '',
          placeHolder: 'May 2021 / Present / Etc.',
          type: 'text'
        },
        jobResponsibilities: {
          required: true,
          value: [''],
          placeHolder: 'I did this stuff in company',
          type: 'addable'
        }
      }
    ]
  },
  Skills: {
    name: 'Skills',
    heading: '',
    extra: true,
    sections: [
      {
        name: {
          required: true,
          value: '',
          placeHolder: 'Programming Languages',
          type: 'text'
        },
        details: {
          required: true,
          value: [''],
          placeHolder: 'Java',
          type: 'addable'
        }
      }
    ]
  },
  Projects: {
    name: 'Projects',
    heading: '',
    extra: true,
    sections: [
      {
        name: {
          required: true,
          value: '',
          placeHolder: 'Chat App',
          type: 'text'
        },
        description: {
          required: true,
          value: '',
          placeHolder: 'Online chat app',
          type: 'text'
        },
        linkToProject: {
          required: true,
          value: '',
          placeHolder: 'https://project.com',
          type: 'text'
        },
        toolsUsed: {
          required: true,
          value: [''],
          placeHolder: 'Java',
          type: 'addable'
        }
      }
    ]
  },
  Awards: {
    name: 'Awards',
    heading: '',
    extra: true,
    sections: [
      {
        name: {
          required: true,
          value: '',
          placeHolder: 'FrontEnd Developer',
          type: 'text'
        },
        date: {
          required: true,
          value: '',
          placeHolder: 'Sep 2020',
          type: 'text'
        },
        awarder: {
          required: true,
          value: '',
          placeHolder: 'FreeCodeCamp',
          type: 'text'
        },
        summary: {
          required: true,
          value: '',
          placeHolder: 'Rewarded for 300 hours course work and projects',
          type: 'text'
        }
      }
    ]
  }
}

export default exportedObject
