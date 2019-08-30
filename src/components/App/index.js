import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../Admin'

import * as ROUTES from '../../constants/routes'

console.log(process.env)

const App = (props) =>  {
  const [ userId, setUserId ] = useState(null)

  console.log(userId)

  return (
    <div>
      <Navigation />
      <hr />
      {props.children}
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} render={() => <SignUpPage setUserId={setUserId}/>} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route exact path={ROUTES.HOME} render={() => <HomePage userId={userId} />} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      </Switch>
    </div>

  )
}


export default App