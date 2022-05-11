import React from 'react'
import Template1 from './Templates/template1'

const Preview = (props) => {
  const render = <Template1 pdf={props.pdf} loading={props.loading} resume={props.resume} />
  return <div className='preview'>{render}</div>
}

export default Preview
