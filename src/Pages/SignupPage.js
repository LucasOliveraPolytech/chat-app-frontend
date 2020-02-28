import React from 'react'
import Container from 'react-bootstrap/Container'
import SigninPageButton from '../Components/Signup/SigninPageButton'
import SignupForm from '../Components/Signup/SignupForm'
import '../Styles/styles.css'

export default class SignupPage extends React.Component {
  render () {
    return (
      <Container className='centeredContent'>
        <h3>Member Registration</h3>
        <SignupForm />
        <SigninPageButton />
      </Container>
    )
  }
}
