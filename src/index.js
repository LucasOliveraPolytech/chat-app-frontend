import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

const cache = new InMemoryCache()

async function waitForPersist () {
  await persistCache({
    cache,
    storage: window.localStorage
  })
}
waitForPersist()

const link = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

const client = new ApolloClient({
  cache,
  link
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>, document.getElementById('root'))

serviceWorker.unregister()
