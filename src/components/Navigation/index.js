import React from 'react'
import { NavLink } from 'react-router-dom'

import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'

const Navigation = ({ authUser }) => (
  <div>
    {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
)

const NavigationAuth = () => (
  <ul>
    <li>
      <NavLink exact to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink exact to={ROUTES.HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink exact to={ROUTES.ACCOUNT}>Account</NavLink>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
)

const NavigationNonAuth = () => (
  <ul>
    <li>
      <NavLink exact to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink exact to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </ul>
)

export default Navigation