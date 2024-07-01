import React from 'react'
import PropTypes from 'prop-types'

function InputField({ description, label, error, change, inputValue, autofocus = false }) {
  return (
    <div className="form-div input">
      <label className='form-label' htmlFor={description['id']}>{label}</label>
      {(autofocus) ?
        <input {...description} onChange={change} value={inputValue} autoFocus /> :
        <input {...description} onChange={change} value={inputValue} />
      }
      {error && <span className="form-error">{'\u26A0'} {error}</span>}
    </div>
  )
}

function SelectField({ label, description, error, options, change, inputValue, autofocus = false }) {
  const opts = Object.entries(options).map(([name, option]) => {
    return (
      <option key={name} value={(name === 'default') ? "" : name}>{option}</option>
    )
  })

  return (
    <div className="form-div select">
      <label className='form-label' htmlFor={description['id']}>{label}</label>
      {(autofocus) ?
        <select {...description} onChange={change} value={inputValue} autoFocus> { opts } </select> :
        <select {...description} onChange={change} value={inputValue}> { opts } </select>
      }
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

function TextareaField({ description, label, error, change, inputValue, autofocus = false }) {
  return (
    <div className="form-div textarea">
      <label className='form-label' htmlFor={description['id']}>{label}</label>
      {(autofocus) ?
        <textarea {...description} onChange={change} value={inputValue} autoFocus /> :
        <textarea {...description} onChange={change} value={inputValue} />
      }
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

/* PropTypes */

InputField.propTypes = {
  label: PropTypes.element.isRequired,
  description: PropTypes.object.isRequired,
  error: PropTypes.string,
  change: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  autofocus: PropTypes.bool,
}
SelectField.propTypes = {
  label: PropTypes.element.isRequired,
  description: PropTypes.object.isRequired,
  error: PropTypes.string,
  options: PropTypes.object.isRequired,
  change: PropTypes.func.isRequired,
  autofocus: PropTypes.bool,
  inputValue: PropTypes.string.isRequired
}
TextareaField.propTypes = {
  label: PropTypes.element.isRequired,
  description: PropTypes.object.isRequired,
  error: PropTypes.string,
  change: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  autofocus: PropTypes.bool,
}

export { InputField, SelectField, TextareaField }