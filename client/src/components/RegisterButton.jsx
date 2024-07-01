import React from 'react'
import { Link } from 'react-router-dom'
import '../css/RegisterButton.css'
import PropTypes from 'prop-types'

function RegisterButton(props) {
  // let width = (props.isBig) ? '10rem' : '3rem'
  // let height = (props.isBig) ? '2rem' : '1rem'
  return (
    <Link to='/register' id='registerButton' >
      <lord-icon
        src="https://cdn.lordicon.com/lsrcesku.json"
        trigger="loop"
        stroke="bold"
        delay="2000"
        // colors="primary:#e4e4e4, secondary:#ffc738, tertiary:#3a3347"
        style={{width:'2.2rem', height:'2.2rem'}}
      />
      <span>Enroll in Techknowcradle!!</span>
    </Link>
  )
}

// RegisterButton.defaultProps = {
//   isBig: false
// }

RegisterButton.propTypes = {
  isBig: PropTypes.bool.isRequired,
}

export default RegisterButton;

