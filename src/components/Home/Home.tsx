import React, { FC } from 'react'
import { navigate } from 'hookrouter'

import FirebaseProvider from '../FirebaseProvider'
import { FirebaseProviderReturnProps } from '../FirebaseProvider/FirebaseProvider'
import TextInput from '../TextInput'

type FixMe = any

const Home: FC<{}> = () => {
  const onFinishCallback = (name: string) => navigate(`/game/${name}`)

  const handleTextSubmit = async (
    value: string,
    createNewGame: FixMe,
    isGameNameValid: FixMe
  ) => {
    const isValid = await isGameNameValid({ name: value })
    if (isValid) {
      try {
        createNewGame({ name: value, onFinish: onFinishCallback })
      } catch (e) {
        console.log({ e })
      }
    } else {
      // update to useState
      throw new Error('Invalid game name, already exists')
    }
  }

  return (
    <FirebaseProvider>
      {({ createNewGame, isGameNameValid }: FirebaseProviderReturnProps) => {
        return (
          <div>
            <h1>Home</h1>
            <TextInput
              onEnter={(value: string) =>
                handleTextSubmit(value, createNewGame, isGameNameValid)
              }
            />
          </div>
        )
      }}
    </FirebaseProvider>
  )
}

export default Home
