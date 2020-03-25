import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Alert } from 'react-bootstrap'
import { useFormik } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { setToken } from '../../tokenHandling'
import { useHistory } from 'react-router-dom'

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
  const history = useHistory()
  const [error, setError] = useState()
  const [signup] = useMutation(
    SIGNUP_NEW_USER, {
      onCompleted: () => { console.log('Succesfull signup') }
    })
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
        const { data } = await signup({ variables: signupInput })
        setToken(data.signup.jwt)
        history.push('/greetings')
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
