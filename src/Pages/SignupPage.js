import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import '../Styles/styles.css'

export default class SignupPage extends React.Component {
  render () {
    function SigninPageButton () {
      const history = useHistory()

      function handleClick () {
        history.push('/auth/signin')
      }

      return (
        <Button variant='light' onClick={handleClick}>
                  Do you already have an account?
        </Button>
      )
    }

    return (
      <Container className='centeredContent'>
        <h3>Member Registration</h3>
        <Form>
          <Form.Group controlId='signupFormFirstName'>
            <Form.Control placeholder='First name' />
          </Form.Group>

          <Form.Group controlId='signupFormLastName'>
            <Form.Control placeholder='Last name' />
          </Form.Group>

          <Form.Group controlId='signupFormUsername'>
            <Form.Control placeholder='Username' />
          </Form.Group>

          <Form.Group controlId='signupFormPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group controlId='signupFormButton'>
            <Button variant='primary' type='submit' block>
                    Sign up
            </Button>
          </Form.Group>
        </Form>
        <SigninPageButton />
      </Container>
    )
  }
}
