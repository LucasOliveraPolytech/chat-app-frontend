import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SignupForm () {
  return (
    <Form>
      <Form.Group controlId='firstName'>
        <Form.Control placeholder='First name' />
      </Form.Group>

      <Form.Group controlId='lastName'>
        <Form.Control placeholder='Last name' />
      </Form.Group>

      <Form.Group controlId='username'>
        <Form.Control placeholder='Username' />
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form.Group controlId='signupButton'>
        <Button variant='primary' type='submit' block>
          Sign up
        </Button>
      </Form.Group>
    </Form>
  )
}
