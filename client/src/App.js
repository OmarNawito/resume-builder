import React, { useState } from 'react'
import Header from './Header';
import Sections from './Sections';
import Template from './components/Template';
import Template1 from "./Images/template1.png"
import Section from './components/Section';
import axios from 'axios'

function App() {
  let [activeSection, setActiveSection] = useState(0);
  let [resumeID, setResumeID] = useState()

  let [resume, setResume] = useState(
    {
      Profile: {
        name: 'Profile', heading: '', extra: false, sections: [
          {
            firstName: { required: true, value: '', placeHolder: 'firstName', type: 'text' },
            lastName: { required: true, value: '', placeHolder: 'lastName', type: 'text' },
            sureName: { required: true, value: '', placeHolder: 'sureName', type: 'text' },
            Email: { required: true, value: '', placeHolder: 'Email', type: 'email' },
            phone: { required: true, value: '', placeHolder: 'phone', type: 'text' },
            zipCode: { required: true, value: '', placeHolder: 'zipCode', type: 'text' },
            Country: { value: '', placeHolder: 'Country', type: 'text' },
            City: { value: '', placeHolder: 'City', type: 'text' },
            Address: { value: '', placeHolder: 'Address', type: 'text' }
          }
        ]
      },
      Education: {
        name: 'Education', heading: '', extra: true, sections: [
          {
            'College Name': { required: true, value: '', placeHolder: 'Name', type: 'text' },
            'College Location': { required: true, value: '', placeHolder: 'Stanford, CA', type: 'text' },
            'Degree': { required: true, value: '', placeHolder: 'BS', type: 'text' },
            'Major': { required: true, value: '', placeHolder: 'Computer Science', type: 'text' },
            'GPA': { required: true, value: '', placeHolder: '5.5', type: 'text' },
            'Start Date': { required: true, value: '', placeHolder: 'June 2017', type: 'text' },
            'End Date': { required: true, value: '', placeHolder: 'May 2021', type: 'text' }
          }
        ]
      },
      Work: {
        name: 'Work', heading: '', extra: true, sections: [
          {
            'Company Name': { required: true, value: '', placeHolder: 'Google', type: 'text' },
            'Job Title': { required: true, value: '', placeHolder: 'Software Engineer', type: 'text' },
            'Job Location': { required: true, value: '', placeHolder: 'Mountain View, CA', type: 'text' },
            'Start Date': { required: true, value: '', placeHolder: 'June 2017', type: 'text' },
            'End Date': { required: true, value: '', placeHolder: 'May 2021 / Present / Etc.', type: 'text' },
            'Job Responsibilities': { required: true, value: [''], placeHolder: 'I did this stuff in company', type: 'addable' }
          }
        ]
      },
      Skills: {
        name: 'Skills', heading: '', extra: true, sections: [
          {
            'Skill Name': { required: true, value: '', placeHolder: 'Programming Languages', type: 'text' },
            'Skill Details': { required: true, value: [''], placeHolder: 'Java', type: 'addable' }
          }
        ]
      },
      Projects: {
        name: 'Projects', heading: '', extra: true, sections: [
          {
            'Project Name': { required: true, value: '', placeHolder: 'Chat App', type: 'text' },
            'Project Description': { required: true, value: '', placeHolder: 'Online chat app', type: 'text' },
            'Link to Project': { required: true, value: '', placeHolder: 'https://project.com', type: 'text' },
            'Tools Used': { required: true, value: [''], placeHolder: 'Java', type: 'addable' }
          }
        ]
      },
      Awards: {
        name: 'Awards', heading: '', extra: true, sections: [
          {
            'Award Name': { required: true, value: '', placeHolder: 'FrontEnd Developer', type: 'text' },
            'Award Date': { required: true, value: '', placeHolder: 'Sep 2020', type: 'text' },
            'Awarder': { required: true, value: '', placeHolder: 'FreeCodeCamp', type: 'text' },
            'Summary': { required: true, value: '', placeHolder: 'Rewarded for 300 hours course work and projects', type: 'text' }
          }
        ]
      }
    }
  );

  let [templates, setTemplates] = useState([
    {
      id: 1,
      src: Template1,
      title: "Template 1",
      active: true
    }
  ]);

  const contentHandler = (content) => {
    resume[content.name] = content;
    setResume(resume);
    sectionHandler(content.name);
  }



  let [sections, setSections] = useState([
    { name: "Templates", active: true },
    { name: "Profile", active: false },
    { name: "Education", active: false },
    { name: "Work", active: false },
    { name: "Skills", active: false },
    { name: "Projects", active: false },
    { name: "Awards", active: false }
  ]);

  const templateHandler = (id) => {
    console.log(id);
    setTemplates(templates.map(t => {
      if (t.id === id) t.active = true;
      else if (t.active === true) t.active = false;
      return t;
    }));
    sectionHandler("Templates");
  }

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

  const nextSection = async () => {
    if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
      sectionHandler(sections[activeSection + 1].name);

      if (!resumeID) {
        setResumeID(Math.random().toString(16).slice(-4))
      }

      switch (resume.Profile.name) {
        case 'Profile':
          const response = await axios.patch(`/resume/personal-details/${resumeID}`, personalDetails);
          console.log('response', response)
          break;
        case 'Template':
        default:
          break;
      }
    }
  }

  const prevSection = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      sectionHandler(sections[activeSection - 1].name);
    }
  }




  console.log('resume', resume.Profile.name)

  async function saveData() {
    try {
      const response = await axios.post('/resume/personal-details', personalDetails);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  let [section, setSection] = useState((<Template templates={templates} handler={templateHandler} />));

  let prev, next, make;

  if (activeSection > 0) prev = (<div className='myBtn' onClick={prevSection}>Prev</div>);
  else prev = (<div className='myBtn' style={{ "pointerEvents": "none", "opacity": "0.5" }}>Prev</div>);
  if (activeSection >= 0 && activeSection < sections.length - 1) next = (<div className='myBtn' onClick={nextSection}>Next</div>);
  else next = (<div className='myBtn' style={{ "pointerEvents": "none", "opacity": "0.5" }}>Next</div>);
  if (activeSection === sections.length - 1) make = (<div onClick={saveData} className='myBtn'>Build</div>);
  else make = (<div className='myBtn' style={{ "pointerEvents": "none", "opacity": "0.5" }}>Build</div>);

  const sectionHandler = (name) => {
    setSections(sections.map((sec, i) => {
      if (sec.name === name) {
        sec.active = true;
        setActiveSection(i);
      }
      else if (sec.active) sec.active = false;
      return sec;
    }));

    if (name === 'Templates') setSection((<Template templates={templates} handler={templateHandler} />));
    else {
      setSection((<Section name={name} content={resume[name]} handler={contentHandler} />))
    }
  }

  let more = (<div className='row_full'>
    {prev}
    {make}
    {next}
  </div>)

  return (
    <div className="main">
      <Header />
      <div className='container'>
        <Sections sections={sections} btnHandler={sectionHandler} />
        {section}
      </div>

      <div className='footer'>
        {more}
      </div>
    </div >
  );
}

export default App;
