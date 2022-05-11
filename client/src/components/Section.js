import React from 'react'
import DummyResume from '../DummyResume'

const LabelInput = (props) => {
  let sectionInputs
  let addBtn
  let delBtn

  const addSection = () => {
    props.onChangeHandler(props.changeKey, [...props.value, ''])
  }

  const deleteSection = () => {
    props.onChangeHandler(props.changeKey, props.value.slice(0, -1))
  }

  if (Array.isArray(props.value)) {
    if (props.value.length > 1) {
      delBtn = (
        <div onClick={deleteSection} className='myBtnDel'>
          Delete
        </div>
      )
    }

    addBtn = (
      <div className='row'>
        <div onClick={addSection} className='myBtn'>
          Add
        </div>
        {delBtn}
      </div>
    )

    sectionInputs = props.value.map((item, i) => {
      return (
        <input
          key={i}
          placeholder={props.placeHolder}
          className='form-control'
          value={item}
          name={props.name}
          onChange={(e) => props.onChangeHandler(props.changeKey, e.target.value, i)}
        />
      )
    })
  } else {
    sectionInputs = (
      <input
        placeholder={props.placeHolder}
        className='form-control'
        value={props.value}
        name={props.name}
        onChange={(e) => props.onChangeHandler(props.changeKey, e.target.value)}
      />
    )
  }

  return (
    <div className='labelInput'>
      <label>{props.name}</label>
      {sectionInputs}
      {addBtn}
    </div>
  )
}

const SectionData = (props) => {
  const inputs = props.inputs.map((item, i) => {
    return (
      <LabelInput
        key={i}
        placeHolder={item.placeHolder}
        changeKey={item.onChange}
        required={item.required ? item.required : false}
        name={item.name}
        value={item.value}
        onChangeHandler={props.handler}
      />
    )
  })

  return (
    <div className='subSection'>
      {inputs}
      <hr />
    </div>
  )
}

const Section = (props) => {
  const helper = []

  props.content.sections.forEach((section, i) => {
    const keys = Object.keys(section)
    const helperInstance = keys.map(key => ({
      name: key,
      placeHolder: section[key].placeHolder,
      value: section[key].value,
      type: section[key].type,
      required: section[key].required,
      onChange: { index: i, key: key }
    }))

    helper.push(helperInstance)
  })

  const headHandler = (e) => {
    props.content.heading = e.target.value
    props.handler(props.content)
  }

  const handler = (key, value, subIndex = -1) => {
    if (subIndex === -1) {
      props.content.sections[key.index][key.key].value = value
    } else {
      props.content.sections[key.index][key.key].value[subIndex] = value
    }
    props.handler(props.content)
  }

  const addSection = () => {
    const temp = JSON.parse(JSON.stringify(DummyResume[props.name].sections[0]))
    props.content.sections.push(temp)
    props.handler(props.content)
  }

  const deleteSection = () => {
    props.content.sections.pop()
    props.handler(props.content)
  }

  const sections = helper.map((item, i) => {
    return <SectionData key={i} inputs={item} handler={handler} />
  })

  let addBtn
  let delBtn

  if (props.content.sections.length > 1) {
    delBtn = (
      <div onClick={deleteSection} className='myBtnDel'>
        Delete
      </div>
    )
  }

  if (props.content.extra) {
    addBtn = (
      <div className='rowSub'>
        <div onClick={addSection} className='myBtn'>
          Add
        </div>
        {delBtn}
      </div>
    )
  }

  return (
    <div id='CustomSection' className='customSeciton'>
      <h3>{'Your ' + props.name}</h3>
      <div className='labelInput'>
        <label>Section Heading</label>
        <input
          className='form-control'
          value={props.content.heading}
          onChange={headHandler}
          type='text'
          name='heading'
        />
      </div>
      <hr />
      {sections}
      {addBtn}
    </div>
  )
}

export default Section
