import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingScreen from './LoadingScreen'
import { FormOne, FormTwo, FormThree, FormFour, FormFive, FormSix } from './Forms'
import { useNavigate } from 'react-router-dom';
import '../css/Forms.css'
import serverNotFoundPic from '../img/server-not-found.png'

function ServerNotConnected() {
  return (
    <main id='not-found'>
      <div id="not-found-container">
        <img src={serverNotFoundPic} alt="Server Not Found Pic" />
        <div>
          <p>Looks like the server is down or unavailable</p>
          <p>Reload the site and try again or contact the admin</p>
        </div>
      </div>
    </main>
  )
}

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

  const formSubmit = (e) => {
    e.preventDefault()
    // console.log(data)
    
    const res = axios.post(import.meta.env.VITE_SERVER_URL+'/users/save', data)

    // navigate('/register/success', { state: JSON.stringify(data) })
    navigate('/register/success', { state: 'Data added successfully!' })
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

  const [isServerConnected, setIsServerConnected] = useState(undefined)

  useEffect(() => {
    axios.get(import.meta.env.VITE_SERVER_URL+'/server/status')
      .then(res => res.status === 200 && setIsServerConnected(true))
      .catch((e) => setIsServerConnected(false))
  })

  let regdiv = (isServerConnected === undefined) ? 
    <LoadingScreen />:
    (isServerConnected === true) ?
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
    </main> :
    <ServerNotConnected />

  return (regdiv)
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