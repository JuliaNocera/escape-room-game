import React from 'react'

import FirebaseProvider from '../FirebaseProvider'
import { FirebaseProviderReturnProps } from '../FirebaseProvider/FirebaseProvider'
import TextInput from '../TextInput'

const Home = () => {
  const handleTextSubmit = (value: string, createNewGame: any) => {
    // TODO: add settings
    createNewGame({ name: value })
  }

  return (
    <FirebaseProvider>
      {({ createNewGame, isGameNameValid }: FirebaseProviderReturnProps) => {
        return (
          <div>
            <h1>Home</h1>
            <button onClick={() => createNewGame({ name: 'test' })}>
              Hello
            </button>
            <button onClick={() => isGameNameValid('tests')}>test name</button>
            <TextInput
              onEnter={(value: string) =>
                handleTextSubmit(value, createNewGame)
              }
            />
          </div>
        )
      }}
    </FirebaseProvider>
  )
}

export default Home
