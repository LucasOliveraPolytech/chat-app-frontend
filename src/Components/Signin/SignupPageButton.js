import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

export default function SignupPageButton () {
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
