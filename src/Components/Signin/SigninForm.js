import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SigninForm () {
  return (
    <Form>
      <Form.Group controlId='username'>
        <Form.Control placeholder='Username' />
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>

      <Form.Group controlId='signinButton'>
        <Button variant='primary' type='submit' block>
          Sign in
        </Button>
      </Form.Group>
    </Form>
  )
}
