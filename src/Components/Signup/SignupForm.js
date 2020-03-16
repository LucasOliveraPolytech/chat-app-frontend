import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useFormik } from 'formik'

export default function SignupForm () {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      password: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <Form>
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
