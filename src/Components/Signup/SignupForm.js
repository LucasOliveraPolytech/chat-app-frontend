import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Alert } from 'react-bootstrap'
import { useFormik } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

const SIGNUP_NEW_USER = gql`
  mutation signupNewUser($signupInput: SignupInput!) {
    signup(userData: $signupInput) {
      user {
        id
        username
        firstName
        lastName
      }
      jwt
    }
  }
`

export default function SignupForm () {
  const [error, setError] = useState()
  const [signup] = useMutation(SIGNUP_NEW_USER)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    },
    onSubmit: async values => {
      try {
        const signupInput = { signupInput: values }
        await signup({ variables: signupInput })
      } catch (error) {
        setError(error)
      }
    }
  })

  return (
    <Form>
      <Alert variant='danger' show={Boolean(error)}>
        Oh Snap! Something went wrong.
      </Alert>
      <Form.Group controlId='firstName'>
        <Form.Control placeholder='First name' onChange={formik.handleChange} />
      </Form.Group>

      <Form.Group controlId='lastName'>
        <Form.Control placeholder='Last name' onChange={formik.handleChange} />
      </Form.Group>

      <Form.Group controlId='username'>
        <Form.Control placeholder='Username' onChange={formik.handleChange} />
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Control type='password' placeholder='Password' onChange={formik.handleChange} />
      </Form.Group>

      <Form.Group controlId='signupButton'>
        <Button variant='primary' type='submit' block onClick={formik.handleSubmit}>
          Sign up
        </Button>
      </Form.Group>
    </Form>
  )
}
