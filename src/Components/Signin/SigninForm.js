import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { useFormik } from 'formik'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { setToken } from '../../tokenHandling'

const SIGNIN_USER = gql`
  mutation signinUser($signinInput: SigninInput!) {
    signin(userData: $signinInput) {
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

export default function SigninForm () {
  const [error, setState] = useState()
  const [signin] = useMutation(
    SIGNIN_USER, {
      onCompleted: () => { console.log('Succesfull login') }
    })
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async values => {
      try {
        const signinInput = { signinInput: values }
        const { data } = await signin({ variables: signinInput })
        setToken(data.signin.jwt)
      } catch (error) {
        setState(error)
      }
    }
  })

  return (
    <Form>
      <Alert variant='danger' show={Boolean(error)}>
        Oh Snap! Something went wrong.
      </Alert>
      <Form.Group controlId='username'>
        <Form.Control placeholder='Username' onChange={formik.handleChange} />
      </Form.Group>

      <Form.Group controlId='password'>
        <Form.Control type='password' placeholder='Password' onChange={formik.handleChange} />
      </Form.Group>

      <Form.Group controlId='signinButton'>
        <Button variant='primary' type='submit' block onClick={formik.handleSubmit}>
          Sign in
        </Button>
      </Form.Group>
    </Form>
  )
}
