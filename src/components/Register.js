import React, { useState } from 'react'
import { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix } from './Forms'
import { useNavigate } from 'react-router-dom';
import '../css/Forms.css'

export default function Register() {
  const [data, setData] = useState({
    fname: '',
    mname: '',
    lname: '',
    sex: '',
    dob: '',
    phno: '',
    email: '',
    address: '',
    classStd: '',
    school: '',
    gname: '',
    rltn: '',
    gphno: '',
    food: '',
    medical: '',
  })

  const change = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  let form1 = <FormOne change={change} data={data} />,
      form2 = <FormTwo change={change} data={data} />,
      form3 = <FormThree change={change} data={data} />,
      form4 = <FormFour change={change} data={data} />,
      form5 = <FormFive change={change} data={data} />,
      form6 = <FormSix change={change} data={data} />

  const { visible, content, steps, next, previous } = PageLoader([form1, form2, form3, form4, form5, form6])
  const navigate = useNavigate()

  const formSubmit = async (e) => {
    e.preventDefault()
    // console.log(JSON.stringify(data))
    // console.log(data)
    navigate('/register/success', { state: JSON.stringify(data) })
  }
  function isUnicodeSupported() {
    try {
      // Attempt to create a regular expression with the Unicode flag
      new RegExp('.', 'u');
      return true; // If successful, Unicode flag is supported
    } catch (e) {
      return false; // If error is thrown, Unicode flag is not supported
    }
  }
  function formValidate() {
    let flag = true
    const namereg = isUnicodeSupported() ? new RegExp(/^[\p{L}.'-]+$/u) : new RegExp(/^[a-z'-]+$/i),
      mnamereg = isUnicodeSupported() ? new RegExp(/(^[\p{L}]+\.?$)|(^$)/u) : new RegExp(/(^([a-z]+\.?)?$)|(^$)/i),
      phnoreg = new RegExp(/^(\+91 ?)?\d{10}$/),
      // eslint-disable-next-line
      emailreg = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
      schoolreg = new RegExp(/^[a-z. '\-&]+$/i),
      fnamereg = isUnicodeSupported() ? new RegExp(/^[\p{L} .'-]+$/u) : new RegExp(/^[a-z .'-]+$/i)

    // console.log(schoolreg.test(data['school']))
    if (visible === 0) {
      if (data['fname'] === '' || data['lname'] === '') flag = false
      else if (!(namereg.test(data['fname']) && namereg.test(data['lname']))) flag = false
      else if (!mnamereg.test(data['mname'])) flag = false
    }
    else if (visible === 1) {
      if (data['sex'] === '' || data['dob'] === '' || data['phno'] === '') flag = false
      else if (!phnoreg.test(data['phno'])) flag = false
      
    }
    else if (visible === 2) {
      if (data['email'] === '' || data['address'] === '' || data['classStd'] === '') flag = false
      else if (!emailreg.test(data['email'])) flag = false
    }
    else if (visible === 3) {
      if (data['school'] === '' || data['gname'] === '' || data['rltn'] === '') flag = false
      else if (!schoolreg.test(data['school'])) flag = false
      else if (!fnamereg.test(data['gname'])) flag = false
    }
    else if (visible === 4) {
      if (data['gphno'] === '' || data['food'] === '') flag = false
      else if (!phnoreg.test(data['gphno'])) flag = false
    }

    return flag;
  }

  let prevBtn = visible !== 0 && <button type="button" onClick={previous}>Previous</button>
  let nextBtn = (visible !== steps.length - 1) && (formValidate() ? <button type="button" onClick={next}>Next</button> : <button disabled title="Fill out the required fields in the form to continue">Next</button>)
  let submitBtn = visible === steps.length - 1 && <button type='submit'>Submit</button>

  return (
    <main id="register">
      <div id="form-element">
        <div id='stepCount'>Step {visible+1} of {steps.length}</div>
        <form id="register-form" onSubmit={formSubmit}>
          {content}
          <div id="form-btns">
            {prevBtn}
            {nextBtn}
            {submitBtn}
          </div>
        </form>
      </div>
    </main>
  )
}

function PageLoader(steps) {
  const [visible, setVisible] = useState(0);

  function next(e) {
    setVisible(visible < steps.length - 1 ? visible + 1 : visible);
  }

  function previous() {
    setVisible(visible > 0 ? visible - 1 : visible);
  }

  return {
    visible,
    content: steps[visible],
    steps,
    next,
    previous
  }
}