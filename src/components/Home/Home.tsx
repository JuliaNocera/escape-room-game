import React, { FC, useState } from 'react'
import { navigate } from 'hookrouter'

import FirebaseProvider, {
  FirebaseProviderReturnProps,
  CreateGameNameFunc,
  GameNameExistsFunc,
} from '../FirebaseProvider'
import TextInput from '../TextInput'
import InvalidInputMessage from './InvalidInputMessage'

import { DefaultSubmitDisabledState } from './types'
import {
  findUnacceptableCharsForGameName,
  encodeString,
  trimSpaces,
} from '../../lib/textHelpers'

const defaultSubmitDisabledState = {
  isDisabled: false,
  invalidChars: [],
}

const Home: FC<{}> = () => {
  const [submitDisabled, updateSubmitDisabled] = useState(
    defaultSubmitDisabledState as DefaultSubmitDisabledState
  )
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
      updateSubmitDisabled({
        isDisabled: true,
        disabledReason: `A game with this name already exists: ${trimmedName}`,
        invalidChars: submitDisabled.invalidChars,
      })
    }
  }

  const validateInput = (input: string) => {
    const matches = findUnacceptableCharsForGameName(input)
    if (matches !== null) {
      updateSubmitDisabled({
        isDisabled: true,
        disabledReason: 'Invalid characters in the game name: ',
        invalidChars: matches,
      })
      return false
    }
    updateSubmitDisabled({ isDisabled: false, invalidChars: [] })
    return true
  }

  return (
    <FirebaseProvider>
      {({ createNewGame, gameNameExists }: FirebaseProviderReturnProps) => {
        return (
          <div>
            <h1>Home</h1>
            <InvalidInputMessage submitDisabled={submitDisabled} />
            <TextInput
              onEnter={(value: string) =>
                handleTextSubmit(value, createNewGame, gameNameExists)
              }
              disabled={submitDisabled.isDisabled}
              validateInput={validateInput}
              autoFocus
            />
          </div>
        )
      }}
    </FirebaseProvider>
  )
}

export default Home
