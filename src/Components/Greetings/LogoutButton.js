import React from 'react'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import { useApolloClient } from 'react-apollo'

export default function LogoutButton () {
  const history = useHistory()
  const client = useApolloClient()

  async function handleClick () {
    await clearCache()
    redirectToSigninPage()
  }

  async function clearCache () {
    await client.clearStore()
    window.localStorage.clear()
  }

  function redirectToSigninPage () {
    history.push('/auth/signin')
  }

  return (
    <Button variant='primary' type='submit' onClick={handleClick}>
      Logout
    </Button>
  )
}
