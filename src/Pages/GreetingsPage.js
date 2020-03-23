import React from 'react'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import LogoutButton from '../Components/Greetings/LogoutButton'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import '../Styles/styles.css'

const CURRENT_USER_QUERY = gql`
  query currentUserQuery {
    currentUser {
      id
      username
      firstName
      lastName
    }
  }
`

export default function GreetingsPage () {
  const { loading, error, data } = useQuery(CURRENT_USER_QUERY)

  if (loading) {
    return (
      <Spinner className='centeredContent' animation='border' variant='primary' />
    )
  }

  if (error) {
    return `Error! ${error.message}`
  }

  if (data) {
    return (
      <Container className='centeredContent'>
        <h3>Welcome {data.currentUser.firstName}!</h3>
        <h4>This is the information we have about you:</h4>
        <Container className='centeredCompact'>
          <h5>Your id: {data.currentUser.id}</h5>
          <h5>Your name: {data.currentUser.firstName} {data.currentUser.lastName}</h5>
          <h5>Username: {data.currentUser.username}</h5>
        </Container>
        <LogoutButton />
      </Container>
    )
  }
}
