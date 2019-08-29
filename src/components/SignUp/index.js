import React, { Component } from 'react'

const SignUp = () => (
  <div>
    <h1>Signup</h1>
    <SignUpForm />
  </div>
)

class SignUpForm extends Component {
  state = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  }

  onSubmit = event => {

  }

  onChange = event => {
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  render() {
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

      </form>
    )
  }
}

export default SignUp