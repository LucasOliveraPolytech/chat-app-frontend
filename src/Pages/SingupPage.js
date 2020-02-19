import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Styles/styles.css'

export default class SingupPage extends React.Component {
  render () {
    return (
      <Container className='centeredContent'>
        <h3>Member Registration</h3>
        <Form>
          <Form.Group controlId='singupFormFirstName'>
            <Form.Control placeholder='First name' />
          </Form.Group>

          <Form.Group controlId='singupFormLastName'>
            <Form.Control placeholder='Last name' />
          </Form.Group>

          <Form.Group controlId='singupFormUsername'>
            <Form.Control placeholder='Username' />
          </Form.Group>

          <Form.Group controlId='singupFormPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group controlId='signupFormButton'>
            <Button variant='primary' type='submit' block>
                    Sign up
            </Button>
          </Form.Group>
        </Form>
        <Button variant='light'>
                  Do you already have an account?
        </Button>
      </Container>
    )
  }
}
