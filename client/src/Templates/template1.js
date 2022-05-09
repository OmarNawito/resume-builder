import React, { useState, useEffect } from 'react'

import './template1.css'
// import { PDFViewer } from '@react-pdf/renderer';
import { renderToString } from 'react-dom/server'

const Style = 'body{page-break-inside;font-family: times;}.pageBreak{page-break-inside:avoid; page-break-after:auto}.template1{font-family: times;page-break-inside: avoid; background-color:#fff;color:#000;padding:0px 60px; width: 1000px}#profile{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:5px 0}#profile span{margin:0 4px}#profile .user_name{font-size:25px;font-family:times;font-weight:bolder}.row_close{display:flex;flex-direction:row}.template1 li{list-style-position:inside;margin:3px 0}#education{display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;margin:20px 0}#education .Heading{width:100%;margin-bottom:5px;font-size:20px;font-family:times;font-weight:bolder;border-bottom:solid 1px #000;padding:5px 0}.row_far{width:calc(100% - 20px);display:flex;flex-direction:row;justify-content:space-between;margin:5px 0;margin-left:20px}.row_far2{width:calc(100% - 20px);display:flex;flex-direction:row;justify-content:space-between}.gap{margin:5px 0;margin-left:20px}#education .collegeName{font-size:18px;font-family:times;font-weight:bolder}#education span{margin:0 5px}.column1{display:flex;flex-direction:column;align-items:flex-start}.column2{display:flex;flex-direction:column;align-items:flex-end}#work{width:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;margin:20px 0}#work .Heading{width:100%;margin-bottom:5px;font-size:20px;font-family:times;font-weight:bolder;border-bottom:solid 1px #000;padding:5px 0}#work .companyName{font-size:18px;font-family:times;font-weight:bolder}#work span{margin:0 5px}.column3{width:100%;display:flex;flex-direction:column;margin:5px 0}.column4{width:calc(100% - 20px);display:flex;flex-direction:column;margin:5px 0;margin-left:20px}#work .job{margin:5px 0;margin-left:50px}#skills{width:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;margin:20px 0}#skills .Heading{width:100%;margin-bottom:5px;font-size:20px;font-family:times;font-weight:bolder;border-bottom:solid 1px #000;padding:5px 0}#skills .skillDetail{margin:0 5px}#projects{width:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;margin:20px 0}#projects .Heading{width:100%;margin-bottom:5px;font-size:20px;font-family:times;font-weight:bolder;border-bottom:solid 1px #000;padding:5px 0}#projects .projectName{font-size:18px;font-family:times;font-weight:bolder;margin-right:10px}#projects .toolsUsed{margin:0 5px}#awards{width:100%;display:flex;flex-direction:column;justify-content:space-evenly;align-items:flex-start;margin:20px 0}#awards .Heading{width:100%;margin-bottom:5px;font-size:20px;font-family:times;font-weight:bolder;border-bottom:solid 1px #000;padding:5px 0}#awards .awardName{font-size:18px;font-family:times;font-weight:bolder;margin-right:10px}.row_far3{width:calc(100% - 20px);display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end}.row_far3 .summary{flex-basis:0;flex-grow:1}.row_far3 .awardDate{flex-basis:0;flex-grow:.1;text-align:right}'

const Render = (resume) => {
  const render = []
  render.push((
    <div id='profile'>
      <div className='user_name'>{resume.Profile.sections[0].firstName.value}  {resume.Profile.sections[0].lastName.value}</div>
      <div className='user_name'>{resume.Profile.sections[0].sureName.value}</div>
      <div className='row_close'>
        <div className='Address'>{resume.Profile.sections[0].Address.value}</div><span>.</span>
        <div className='Email'>{resume.Profile.sections[0].Email.value}</div><span>.</span>
        <div className='Phone'>{resume.Profile.sections[0].phone.value}</div>
        <div className='zipCode'>{resume.Profile.sections[0].zipCode.value}</div>
        <div className='Country'>{resume.Profile.sections[0].Country.value}</div>
        <div className='City'>{resume.Profile.sections[0].City.value}</div>
        <div className='Address'>{resume.Profile.sections[0].Address.value}</div>
      </div>
      {/* <div className='row_close'>
                        <div className="Portfolio">{resume.Profile.sections[0].Portfolio.value}</div><span>.</span>
                        <div className="LinkedIn">{resume.Profile.sections[0].LinkedIn.value}</div>
                    </div> */}
    </div>
  ))

  render.push((
    <div id='education'>
      <div className='Heading'>{resume.Education.heading}</div>
      {
				resume.Education.sections.map(section => {
				  return (
  <div className='row_far pageBreak'>
    <div className='column1'>
      <div className='collegeName'>{section.collegeName.value}</div>
      <div className='row_close'>
        <div className='degree'>{section.degree.value}</div><span />
        <div className='major'>{section.major.value}</div><span />
        <div className='gpa'>GPA: {section.gpa.value}</div>
      </div>
    </div>
    <div className='column2'>
      <div className='collegeLocation'>{section.collegeLocation.value}</div>
      <div className='row_close'>
        <div className='startDate'>{section.startDate.value}</div><span>-</span>
        <div className='endDate'>{section.endDate.value}</div>
      </div>
    </div>
  </div>
				  )
				})
			}

    </div>
  ))
  render.push((
    <div id='work'>
      <div className='Heading'>{resume.Work.heading}</div>
      {
				resume.Work.sections.map(section => {
				  return (
  <div className='column3 pageBreak'>
    <div className='row_far'>
      <div className='column1'>
        <div className='companyName'>{section.companyName.value}</div>
        <div className='jobTitle'>{section.jobTitle.value}</div>
      </div>
      <div className='column2'>
        <div className='jobLocation'>{section.jobLocation.value}</div>
        <div className='row_close'>
          <div className='startDate'>{section.startDate.value}</div><span>-</span>
          <div className='endDate'>{section.endDate.value}</div>
        </div>
      </div>
    </div>
    <ul className='job'>
      {
								section.jobResponsibilities.value.map(j => {
								  return (
  <li className='jr'>{j}</li>
								  )
								})
							}
    </ul>
  </div>
				  )
				})
			}

    </div>
  ))
  render.push((
    <div id='skills' className='pageBreak'>
      <div className='Heading'>{resume.Skills.heading}</div>
      {
				resume.Skills.sections.map(section => {
				  return (
  <div className='row_far'>
    <div className='skillName'>{section.name.value}:</div>
    <div className='row_close'>
      {
								section.details.value.map((s, i) => {
								  if (i === section.details.value.length - 1) return (<div className='skillDetail'>{s}</div>)
								  else return (<div className='skillDetail'>{s},</div>)
								})
							}
    </div>
  </div>
				  )
				})
			}
    </div>
  ))
  render.push((
    <div id='projects'>
      <div className='Heading'>{resume.Projects.heading}</div>
      {
				resume.Projects.sections.map(section => {
				  return (
  <div className='column4 pageBreak'>
    <div className='row_close'>
      <div className='projectName'>{section.name.value}</div>
      <div className='row_close'>
        {
									section.toolsUsed.value.map((t, i) => {
									  if (i === section.toolsUsed.value.length - 1) { return (<div className='toolsUsed'>{t},</div>) } else { return (<div className='toolsUsed'>{t}</div>) }
									})
								}
      </div>
    </div>
    <div className='projectLink'>{section.linkToProject.value}</div>
    <div className='projectDescription'>{section.description.value}</div>
  </div>
				  )
				})
			}
    </div>
  ))

  render.push((
    <div id='awards'>
      <div className='Heading'>{resume.Awards.heading}</div>
      <div className=''>
        {
				resume.Awards.sections.map(section => {
				  return (
  <div className='column4 pageBreak'>
    <div className='row_far2'>
      <div className='awardName'>{section.name.value}</div>
      <div className='awarder'>{section.awarder.value}</div>
    </div>
    <div className='row_far3'>
      <div className='summary'>{section.summary.value}</div>
      <div className='awardDate'>{section.date.value}</div>
    </div>
  </div>
				  )
				})
			}
      </div>
    </div>
  ))
  return [renderToString(render), render]
}

export { Style }

export { Render }

const Template = (props) => {
  const [pdf, setPdf] = useState(props.pdf)

  useEffect(() => {
    setPdf(props.pdf)
  }, [props.pdf])

  let preview

  if (pdf) {
    preview = (
      <object data={pdf} type='application/pdf' width='100%' height='100%'>
        <p>Your web browser doesn't have a PDF plugin.
          Instead you can
        </p>
        <a className='myBtnActive2' href={pdf}>Download PDF</a>
      </object>
    )
  } else if (props.loading) {
    preview = (
      <div className='buildPdf'>
        <div className='spinner-loader' />
      </div>
    )
  } else {
    preview = (
      <div className='buildPdf'>
        Click Build to generate a PDF.
      </div>
    )
  }

  return (
    <div className='template1'>
      {preview}
    </div>
  )
}

export default Template
