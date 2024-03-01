import React from 'react'
import PropTypes from 'prop-types'

function InputField(props) {
  return (
    <div className="form-div input">
      <label className='form-label' htmlFor={props.description['id']}>{props.label}</label>
      {(props.autofocus) ?
        <input {...props.description} onChange={props.change} value={props.inputValue} autoFocus /> :
        <input {...props.description} onChange={props.change} value={props.inputValue} />
      }
      {props.error && <span className="form-error">{'\u26A0'} {props.error}</span>}
    </div>
  )
}

function SelectField(props) {
  const options = Object.entries(props.options).map(([name, option]) => {
    return (
      <option key={name} value={(name === 'default') ? "" : name}>{option}</option>
    )
  })

  return (
    <div className="form-div select">
      <label className='form-label' htmlFor={props.description['id']}>{props.label}</label>
      {(props.autofocus) ?
        <select {...props.description} onChange={props.change} value={props.inputValue} autoFocus> { options } </select> :
        <select {...props.description} onChange={props.change} value={props.inputValue}> { options } </select>
      }
      {props.error && <span className="form-error">{props.error}</span>}
    </div>
  )
}

function TextareaField(props) {
  return (
    <div className="form-div textarea">
      <label className='form-label' htmlFor={props.description['id']}>{props.label}</label>
      {(props.autofocus) ?
        <textarea {...props.description} onChange={props.change} value={props.inputValue} autoFocus /> :
        <textarea {...props.description} onChange={props.change} value={props.inputValue} />
      }
      {props.error && <span className="form-error">{props.error}</span>}
    </div>
  )
}

/* Default Property Values */

InputField.defaultProps = {
  autofocus: false
}
SelectField.defaultProps = {
  autofocus: false
}
TextareaField.defaultProps = {
  autofocus: false
}

/* PropTypes */

InputField.propTypes = {
  label: PropTypes.element.isRequired,
  description: PropTypes.object.isRequired,
  error: PropTypes.string,
  change: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  autofocus: PropTypes.bool.isRequired,
}
SelectField.propTypes = {
  label: PropTypes.element.isRequired,
  description: PropTypes.object.isRequired,
  error: PropTypes.string,
  options: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
  autofocus: PropTypes.bool.isRequired,
  inputValue: PropTypes.string.isRequired
}
TextareaField.propTypes = {
  label: PropTypes.element.isRequired,
  description: PropTypes.object.isRequired,
  error: PropTypes.string,
  change: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  autofocus: PropTypes.bool.isRequired,
}

export { InputField, SelectField, TextareaField }