import React from 'react'

import { FirebaseContext } from '../Firebase'

const Home = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      firebase.doCreateUserWithEmailAndPassword("mikasdfasdfsadfe@mike.com", "hhhhhh")
      return <div>This is Firebase and stuff</div>
    }}
  </FirebaseContext.Consumer>
)

export default Home