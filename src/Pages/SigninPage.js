import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import '../Styles/styles.css'

export default class SigninPage extends React.Component {
  render () {
    function SignupPageButton () {
      const history = useHistory()

      function handleClick () {
        history.push('/auth/signup')
      }

      return (
        <Button variant='light' onClick={handleClick}>
                    Don't you have an account?
        </Button>
      )
    }

    return (
      <Container className='centeredContent'>
        <h3>Member Login</h3>
        <Form>
          <Form.Group controlId='signinFormUsername'>
            <Form.Control placeholder='Username' />
          </Form.Group>

          <Form.Group controlId='signinFormPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group controlId='signinFormButton'>
            <Button variant='primary' type='submit' block>
                    Sign in
            </Button>
          </Form.Group>
        </Form>
        <SignupPageButton />
      </Container>
    )
  }
}
