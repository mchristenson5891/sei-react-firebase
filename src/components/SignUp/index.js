import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { withFirebase } from '../Firebase'

const SignUp = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Signup</h1>
        <SignUpForm />
    </div>
  )
}

class SignUpFormBase extends Component {
  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state
    event.preventDefault()
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => console.log(authUser))
      .catch(error => {
        this.setState({error})
      })
  }

  onChange = event => {
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  render() {
    console.log(this.state)
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state
    
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type='text'
          placeholder='Full Name'
        />
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type='text'
          placeholder='Email'
        />
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type='password'
          placeholder='Password'
        />
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type='password'
          placeholder='Confirm Password'
        />
        <button type='submit' disabled={isInvalid}>Sign Up</button>
        {error && error.message}
      </form>
    )
  }
}

const SignUpForm = withFirebase(SignUpFormBase)

export default withRouter(SignUp)