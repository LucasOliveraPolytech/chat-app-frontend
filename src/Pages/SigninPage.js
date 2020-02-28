import React from 'react'
import Container from 'react-bootstrap/Container'
import SigninForm from '../Components/Signin/SigninForm'
import SignupPageButton from '../Components/Signin/SignupPageButton'
import '../Styles/styles.css'

export default class SigninPage extends React.Component {
  render () {
    return (
      <Container className='centeredContent'>
        <h3>Member Login</h3>
        <SigninForm />
        <SignupPageButton />
      </Container>
    )
  }
}
