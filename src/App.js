import React from 'react'
import './App.css'
import SignupPage from './Pages/SignupPage.js'
import SigninPage from './Pages/SigninPage.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <Router>
      <Switch>
        <Route path='/auth/signup' exact component={SignupPage} />
        <Route path='/auth/signin' exact component={SigninPage} />
      </Switch>
    </Router>
  )
}

export default App
