import React from 'react'

const Sections = (props) => {
  function MyButton (props) {
    if (props.isActive) {
      return (
        <div className='myBtnActive' onClick={() => props.clickHandler(props.name)}>
          {props.name}
        </div>
      )
    } else {
      return (
        <div className='myBtn' onClick={() => props.clickHandler(props.name)}>
          {props.name}
        </div>
      )
    }
  }

  const btns = props.sections.map((btn) => {
    return (
      <MyButton
        key={btn.name}
        name={btn.name}
        clickHandler={props.btnHandler}
        isActive={btn.active}
      />
    )
  })
  
  return (
    <div className='sections'>
      {btns}
      <hr />
      <MyButton
        name='Build'
        key='Build'
        clickHandler={props.buildPdf}
        isActive={props.buildStepActive}
      />
    </div>
  )
}

export default Sections
