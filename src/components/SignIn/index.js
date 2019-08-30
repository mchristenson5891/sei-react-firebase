import React, { Component } from 'react'

const SignIn = () => (
  <div>
    <h1>SignIn</h1>
    <SignInFormBase />
  </div>
)

class SignInFormBase extends Component {
  render() {
    return (
      <form>
        <input 
          name='email'
          type='text'
          placeholder='Email Address'
        />
        <input 
          name='password'
          type='password'
          placeholder='Password'
        />

      </form>
    )
  }
}

export default SignIn