import React, { PropsWithChildren } from 'react'

import FirebaseContext from '../FirebaseContext'
import INITIAL_ROOMS_STATE from '../../lib/constants/rooms'
import { GameSettings } from '../Game/Game'

export interface FirebaseProviderReturnProps {
  createNewGame: ({
    name,
    settings,
  }: {
    name: string
    settings?: GameSettings
  }) => void
  // isGameNameValid: (name: string) => Boolean
  [key: string]: any
  database: firebase.database.Database
}

const defaultGameSettings = {
  timer: false,
}

const FirebaseProvider = ({ children }: PropsWithChildren<{}>) => (
  <FirebaseContext.Consumer>
    {({ fb }) => {
      const database = fb.database()
      const createNewGame = ({
        name,
        settings = defaultGameSettings,
      }: {
        name: string
        settings?: GameSettings
      }) => {
        // TODO: sanitize user input
        database.ref(`games/${name}`).set({
          created_at: Date.now(),
          settings,
          rooms: INITIAL_ROOMS_STATE.rooms,
        })
      }

      const isGameNameValid = async (name: string) => {
        const snapshot = await database.ref(`games/`).once('value')
        const value = await snapshot.val()
        return Boolean(value[name])
      }

      const getGame = async (name: string) => {
        const snapshot = await database.ref(`games/${name}`).once('value')
        const value = await snapshot.val()
        console.log({ value })

        return Promise.resolve(value)
      }

      if (typeof children === 'function') {
        return children({
          database,
          isGameNameValid,
          createNewGame,
          getGame,
        } as FirebaseProviderReturnProps)
      }

      return children
    }}
  </FirebaseContext.Consumer>
)

export default FirebaseProvider
