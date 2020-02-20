import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../Styles/styles.css'

export default class SigninPage extends React.Component {
  render () {
    return (
      <Container className='centeredContent'>
        <h3>Member Login</h3>
        <Form>
          <Form.Group controlId='singupFormUsername'>
            <Form.Control placeholder='Username' />
          </Form.Group>

          <Form.Group controlId='singupFormPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group controlId='signupFormButton'>
            <Button variant='primary' type='submit' block>
                    Sign in
            </Button>
          </Form.Group>
        </Form>
        <Button variant='light' href='/auth/signup'>
                  Don't you have an account?
        </Button>
      </Container>
    )
  }
}
