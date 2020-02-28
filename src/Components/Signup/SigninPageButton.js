import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'

export default function SigninPageButton () {
  const history = useHistory()

  function handleClick () {
    history.push('/auth/signin')
  }

  return (
    <Button variant='light' onClick={handleClick}>
      Do you already have an account?
    </Button>
  )
}
