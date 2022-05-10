import React, { useState, useEffect } from 'react'
import Header from './Header'
import Sections from './Sections'
import Template from './components/Template'
import Preview from './Preview'
import Template1 from './Images/template1.png'
import Section from './components/Section'
import axios from 'axios'
import { Style as style1, Render as render1 } from './Templates/template1'

function App() {
  const [style, setStyle] = useState(1)
  const [activeSection, setActiveSection] = useState(0)
  const [resumeID, setResumeID] = useState()
  const [pdfLoading, setPdfLoading] = useState(false)
  const [pdf, setPdf] = useState('')

  let render, cssStyle

  const [resume, setResume] = useState({
    Profile: {
      name: 'Profile',
      heading: '',
      extra: false,
      sections: [
        {
          firstName: {
            required: true,
            value: '',
            placeHolder: 'firstName',
            type: 'text',
          },
          lastName: {
            required: true,
            value: '',
            placeHolder: 'lastName',
            type: 'text',
          },
          sureName: {
            required: true,
            value: '',
            placeHolder: 'sureName',
            type: 'text',
          },
          Email: {
            required: true,
            value: '',
            placeHolder: 'Email',
            type: 'email',
          },
          phone: {
            required: true,
            value: '',
            placeHolder: 'phone',
            type: 'text',
          },
          zipCode: {
            required: true,
            value: '',
            placeHolder: 'zipCode',
            type: 'text',
          },
          Country: { value: '', placeHolder: 'Country', type: 'text' },
          City: { value: '', placeHolder: 'City', type: 'text' },
          Address: { value: '', placeHolder: 'Address', type: 'text' },
        },
      ],
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
            type: 'text',
          },
          collegeLocation: {
            required: true,
            value: '',
            placeHolder: 'Stanford, CA',
            type: 'text',
          },
          degree: {
            required: true,
            value: '',
            placeHolder: 'BS',
            type: 'text',
          },
          major: {
            required: true,
            value: '',
            placeHolder: 'Computer Science',
            type: 'text',
          },
          gpa: { required: true, value: '', placeHolder: '5.5', type: 'text' },
          startDate: {
            required: true,
            value: '',
            placeHolder: 'June 2017',
            type: 'text',
          },
          endDate: {
            required: true,
            value: '',
            placeHolder: 'May 2021',
            type: 'text',
          },
        },
      ],
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
            type: 'text',
          },
          jobTitle: {
            required: true,
            value: '',
            placeHolder: 'Software Engineer',
            type: 'text',
          },
          jobLocation: {
            required: true,
            value: '',
            placeHolder: 'Mountain View, CA',
            type: 'text',
          },
          endDate: {
            required: true,
            value: '',
            placeHolder: 'June 2017',
            type: 'text',
          },
          startDate: {
            required: true,
            value: '',
            placeHolder: 'May 2021 / Present / Etc.',
            type: 'text',
          },
          jobResponsibilities: {
            required: true,
            value: [''],
            placeHolder: 'I did this stuff in company',
            type: 'addable',
          },
        },
      ],
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
            type: 'text',
          },
          details: {
            required: true,
            value: [''],
            placeHolder: 'Java',
            type: 'addable',
          },
        },
      ],
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
            type: 'text',
          },
          description: {
            required: true,
            value: '',
            placeHolder: 'Online chat app',
            type: 'text',
          },
          linkToProject: {
            required: true,
            value: '',
            placeHolder: 'https://project.com',
            type: 'text',
          },
          toolsUsed: {
            required: true,
            value: [''],
            placeHolder: 'Java',
            type: 'addable',
          },
        },
      ],
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
            type: 'text',
          },
          date: {
            required: true,
            value: '',
            placeHolder: 'Sep 2020',
            type: 'text',
          },
          awarder: {
            required: true,
            value: '',
            placeHolder: 'FreeCodeCamp',
            type: 'text',
          },
          summary: {
            required: true,
            value: '',
            placeHolder: 'Rewarded for 300 hours course work and projects',
            type: 'text',
          },
        },
      ],
    },
  })

  const [templates, setTemplates] = useState([
    {
      id: 1,
      src: Template1,
      title: 'Template 1',
      active: true,
    },
  ])

  const contentHandler = (content) => {
    resume[content.name] = content
    setResume(resume)
    sectionHandler(content.name)
  }

  async function downloadPdf() {
    try {
      setPdfLoading(true)
      setPdf('')
      const response = await axios.post(
        '/resume',
        {
          resume: "<div class='template1'>" + render + '</div>',
          style: cssStyle,
        },
        { responseType: 'blob' },
      )
      setPdfLoading(false)
      const objectURL = URL.createObjectURL(response.data)
      setPdf(objectURL)
    } catch (error) {
      console.error(error)
    }
  }

  switch (style) {
    case 1:
      render = render1(resume)[0]
      cssStyle = style1
      break
    default:
      break
  }

  const [sections, setSections] = useState([
    { name: 'Templates', active: true },
    { name: 'Profile', active: false },
    { name: 'Education', active: false },
    { name: 'Work', active: false },
    { name: 'Skills', active: false },
    { name: 'Projects', active: false },
    { name: 'Awards', active: false },
  ])

  const templateHandler = (id) => {
    setTemplates(
      templates.map((t) => {
        if (t.id === id) t.active = true
        else if (t.active === true) t.active = false
        return t
      }),
    )
    setStyle(id)
    sectionHandler('Templates')
  }

  if (!resumeID) {
    setResumeID(Math.random().toString(16).slice(-4))
  }

  const nextSection = async () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1)
      sectionHandler(sections[activeSection + 1].name)
      switch (activeSection) {
        case 1:
          const personalDetails = {
            firstName: resume.Profile.sections[0].firstName.value,
            lastName: resume.Profile.sections[0].lastName.value,
            sureName: resume.Profile.sections[0].sureName.value,
            email: resume.Profile.sections[0].Email.value,
            phone: resume.Profile.sections[0].phone.value,
            zipCode: resume.Profile.sections[0].zipCode.value,
            country: resume.Profile.sections[0].Country.value,
            city: resume.Profile.sections[0].City.value,
            address: resume.Profile.sections[0].Address.value,
          }
          await axios.patch(`/resume/personal-details/${resumeID}`, personalDetails)
          break
        case 2:
          const eductionsData = JSON.parse(JSON.stringify(resume.Education.sections)).map(
            (entry) => {
              for (const key of Object.keys(entry)) {
                entry[key] = entry[key].value
              }
              return entry
            },
          )
          await axios.patch(`/resume/education/${resumeID}`, {
            educations: eductionsData,
          })
          break
        case 3:
          const ExperienceData = JSON.parse(JSON.stringify(resume.Work.sections)).map(
            (entry) => {
              for (const key of Object.keys(entry)) {
                entry[key] = entry[key].value
              }
              return entry
            },
          )
          await axios.patch(`/resume/experience/${resumeID}`, {
            experiences: ExperienceData,
          })
          break
        case 4:
          const SkillsData = JSON.parse(JSON.stringify(resume.Skills.sections)).map(
            (entry) => {
              for (const key of Object.keys(entry)) {
                entry[key] = entry[key].value
              }
              return entry
            },
          )
          await axios.patch(`/resume/skills/${resumeID}`, {
            skills: SkillsData,
          })
          break
        case 5:
          const ProjectData = JSON.parse(JSON.stringify(resume.Projects.sections)).map(
            (entry) => {
              for (const key of Object.keys(entry)) {
                entry[key] = entry[key].value
              }
              return entry
            },
          )
          await axios.patch(`/resume/projects/${resumeID}`, {
            projects: ProjectData,
          })
          break
        case 6:
          const awards = JSON.parse(JSON.stringify(resume.Projects.sections)).map(
            (entry) => {
              for (const key of Object.keys(entry)) {
                entry[key] = entry[key].value
              }
              return entry
            },
          )
          await axios.patch(`/resume/projects/${resumeID}`, { awards })
          break
        default:
          break
      }
    }
  }

  const prevSection = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1)
      sectionHandler(sections[activeSection - 1].name)
    }
  }

  const [section, setSection] = useState(
    <Template templates={templates} handler={templateHandler} />,
  )

  let prev, next, make

  if (activeSection > 0) {
    prev = (
      <div className="myBtn" onClick={prevSection}>
        Prev
      </div>
    )
  } else {
    prev = (
      <div className="myBtn" style={{ pointerEvents: 'none', opacity: '0.5' }}>
        Prev
      </div>
    )
  }
  if (activeSection >= 0 && activeSection <= sections.length - 1) {
    next = (
      <div className="myBtn" onClick={nextSection}>
        Next
      </div>
    )
  } else {
    next = (
      <div className="myBtn" style={{ pointerEvents: 'none', opacity: '0.5' }}>
        Next
      </div>
    )
  }
  if (activeSection === sections.length - 1) {
    make = (
      <div onClick={downloadPdf} className="myBtn">
        Build
      </div>
    )
  } else {
    make = (
      <div className="myBtn" style={{ pointerEvents: 'none', opacity: '0.5' }}>
        Build
      </div>
    )
  }

  const sectionHandler = (name) => {
    setSections(
      sections.map((sec, i) => {
        if (sec.name === name) {
          sec.active = true
          setActiveSection(i)
        } else if (sec.active) sec.active = false
        return sec
      }),
    )

    if (name === 'Templates') {
      setSection(<Template templates={templates} handler={templateHandler} />)
    } else {
      setSection(<Section name={name} content={resume[name]} handler={contentHandler} />)
    }
  }

  const more = (
    <div className="row-full">
      {prev}
      {make}
      {next}
    </div>
  )

  useEffect(() => {
    setPdf('')
  }, [style])

  return (
    <div className="main">
      <Header />
      <div className="container">
        <Sections sections={sections} btnHandler={sectionHandler} />
        {section}
        <Preview loading={pdfLoading} pdf={pdf} resume={resume} template={style} />
      </div>

      <div className="footer">{more}</div>
    </div>
  )
}

export default App
