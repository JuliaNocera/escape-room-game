import React from 'react'

import FirebaseProvider from '../FirebaseProvider'
import { FirebaseProviderReturnProps } from '../FirebaseProvider/FirebaseProvider'

const Home = () => (
  <FirebaseProvider>
    {({ createNewGame, isGameNameValid }: FirebaseProviderReturnProps) => {
      return (
        <div>
          <h1>Home</h1>
          <button onClick={() => createNewGame({ name: 'test' })}>Hello</button>
          <button onClick={() => isGameNameValid('tests')}>test name</button>
        </div>
      )
    }}
  </FirebaseProvider>
)

export default Home
