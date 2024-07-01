import React from 'react'
import PropTypes from 'prop-types'
import { InputField, SelectField, TextareaField } from './FormWrapper'
import { inputs, selects, textareas, options } from './FormInfo'

function Label({ label, required = false }) {
  return (
    <> {label}{required && <span className='required'>*</span>} </>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool
}

function FormOne(props) {
  return (
    <div className='form-section'>
      <div className='heading'>
        <h1>Register here</h1>
        <h2>Please fill out the registration form to enroll</h2>
        <h3><span>*</span> indicates required field</h3>
      </div>
      <InputField
        label=<Label label="First Name" required />
        description={inputs['fname']}
        error='Please enter a valid first name'
        change={props.change}
        inputValue={props.data['fname']}
        autofocus
      />

      <InputField
        label=<Label label="Middle Name" />
        description={inputs['mname']}
        error='Please enter a valid middle name'
        change={props.change}
        inputValue={props.data['mname']}
      />

      <InputField
        label=<Label label="Last Name" required />
        description={inputs['lname']}
        error='Please enter a valid last name'
        change={props.change}
        inputValue={props.data['lname']}
      />

    </div>
  )
}

function FormTwo(props) {
  return (
    <div className='form-section'>
      <div className='heading'>
        <h1>Register here</h1>
        <h2>Please fill out the registration form to enroll</h2>
        <h3><span>*</span> indicates required field</h3>
      </div>
      <SelectField
        label=<Label label="Enter Sex" required />
        description={selects['sex']}
        error='Please select an option'
        options={options['sex']}
        change={props.change}
        inputValue={props.data['sex']}
        autofocus
        />

      <InputField
        label=<Label label="Date of Birth" required />
        description={inputs['dob']}
        error='Select your date of birth'
        change={props.change}
        inputValue={props.data['dob']}
      />
      <InputField
        label=<Label label='Phone Number' required />
        description={inputs['phno']}
        error='Please enter a valid phone number having 10 digits'
        change={props.change}
        inputValue={props.data['phno']}
      />

    </div>
  )
}

function FormThree(props) {
  return (
    <div className='form-section'>
      <div className='heading'>
        <h1>Register here</h1>
        <h2>Please fill out the registration form to enroll</h2>
        <h3><span>*</span> indicates required field</h3>
      </div>
      <InputField
        label=<Label label='Email Address' required />
        description={inputs['email']}
        error='Please enter a valid email address'
        change={props.change}
        inputValue={props.data['email']}
        autofocus
      />

      <TextareaField
        label=<Label label="Student's Residential Address" required />
        description={textareas['address']}
        error='Please provide your residential address to proceed'
        change={props.change}
        inputValue={props.data['address']}
      />

      <SelectField
        label=<Label label='Class' required />
        description={selects['classStd']}
        error='Please select an option'
        options={options['classStd']}
        change={props.change}
        inputValue={props.data['classStd']}
      />
    </div>
  )
}

function FormFour(props) {
  return (
    <div className='form-section'>
      <div className='heading'>
        <h1>Register here</h1>
        <h2>Please fill out the registration form to enroll</h2>
        <h3><span>*</span> indicates required field</h3>
      </div>
      <InputField
        label=<Label label='School Name' required />
        description={inputs['school']}
        error='Please enter a valid school name'
        change={props.change}
        inputValue={props.data['school']}
        autofocus
      />
      <InputField
        label=<Label label="Guardian's Full Name" required />
        description={inputs['gname']}
        error="Please ensure the guardian's name is entered correctly"
        change={props.change}
        inputValue={props.data['gname']}
      />

      <SelectField
        label=<Label label="Relation with Child" required />
        description={selects['rltn']}
        error='Please select an option'
        options={options['rltn']}
        change={props.change}
        inputValue={props.data['rltn']}
      />
    </div>
  )
}

function FormFive(props) {
  return (
    <div className='form-section'>
      <div className='heading'>
        <h1>Register here</h1>
        <h2>Please fill out the registration form to enroll</h2>
        <h3><span>*</span> indicates required field</h3>
      </div>
      <InputField
        label=<Label label="Guardian's Phone Number" required />
        description={inputs['gphno']}
        error='Enter correct phone number having 10 digits'
        change={props.change}
        inputValue={props.data['gphno']}
        autofocus
      />

      <SelectField
        label=<Label label="Select Food Preference" required />
        description={selects['food']}
        error='Please select an option'
        options={options['food']}
        change={props.change}
        inputValue={props.data['food']}
      />

      <TextareaField
        label=<Label label="State medial conditions or allergies of the student (if any)" />
        description={textareas['medical']}
        change={props.change}
        inputValue={props.data['medical']}
      />
    </div>
  )
}

function FormSix() {
  return (
    <div className='form-section acknowledge'>
      <h1>Acknowledgment of Terms</h1>
      <div className='form-checkboxes'><input type="checkbox" name="consent" id="consent" required autoFocus /><label className='form-statement' htmlFor='consent' /><span>By clicking this, I acknowledge that my guardian has read and understood the information provided about the Techknowcradle event, and he/she give consent for me to participate in the event.</span></div>
      <div className='form-checkboxes'><input type="checkbox" name="declaration" id="declaration" required /><label className='form-statement' htmlFor='declaration' /><span>By clicking this, I declare that all information provided is true and accurate to the best of my knowledge, and understand that participation may be revoked if any information is found to be false or misleading.</span></div>
      <div className='form-checkboxes'><input type="checkbox" name="agree" id="agree" required /><label className='form-statement' htmlFor='agree' /><span>By clicking this, I hereby agree to abide by the terms and conditions outlined for the Techknowcradle event and understand that non-compliance may result in my exclusion from participation.</span></div>
    </div>
  )
}

export { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix }