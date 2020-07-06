import React, { FC, useState } from 'react'
import { navigate } from 'hookrouter'

import FirebaseProvider, {
  FirebaseProviderReturnProps,
  CreateGameNameFunc,
  GameNameExistsFunc,
} from '../FirebaseProvider'
import TextInput from '../TextInput'
import {
  findUnacceptableCharsForGameName,
  encodeString,
  trimSpaces,
} from '../../lib/textHelpers'

const Home: FC<{}> = () => {
  const [invalidChars, updateInvalidChars] = useState([] as string[])
  const onFinishCallback = (name: string) => {
    const encodedName = encodeString(name)
    navigate(`/game/${encodedName}`)
  }

  const handleTextSubmit = async (
    value: string,
    createNewGame: CreateGameNameFunc,
    gameNameExists: GameNameExistsFunc
  ) => {
    const trimmedName = trimSpaces(value)
    const nameExists = await gameNameExists(trimmedName)
    if (!nameExists) {
      try {
        createNewGame({ name: trimmedName, onFinish: onFinishCallback })
      } catch (e) {
        console.log({ e })
      }
    } else {
      // update to useState
      throw new Error('Invalid game name, already exists')
    }
  }

  const isValidInput = (input: string) => {
    const matches = findUnacceptableCharsForGameName(input)
    if (matches !== null) {
      updateInvalidChars(matches)
      return false
    }
    updateInvalidChars([])
    return true
  }

  return (
    <FirebaseProvider>
      {({ createNewGame, gameNameExists }: FirebaseProviderReturnProps) => {
        return (
          <div>
            <h1>Home</h1>
            <TextInput
              onEnter={(value: string) =>
                handleTextSubmit(value, createNewGame, gameNameExists)
              }
              isValidInput={isValidInput}
            />
          </div>
        )
      }}
    </FirebaseProvider>
  )
}

export default Home
