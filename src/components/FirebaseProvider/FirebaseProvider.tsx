import React, { PropsWithChildren } from 'react'

import FirebaseContext from '../FirebaseContext'
import INITIAL_ROOMS_STATE from '../../lib/constants/rooms'
import { CreateGameParams, FirebaseProviderReturnProps } from './types'

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
        onFinish,
      }: CreateGameParams) => {
        // TODO: sanitize user input
        const onComplete = (a?: Error | null) => {
          if (a) {
            throw a
          } else if (onFinish) {
            onFinish(name)
          }
          return
        }

        database.ref(`games/${name}`).set(
          {
            created_at: Date.now(),
            settings,
            rooms: INITIAL_ROOMS_STATE.rooms,
          },
          onComplete
        )
      }

      const gameNameExists = async (name: string) => {
        const snapshot = await database.ref(`games/`).once('value')
        const value = snapshot.val()
        if (value?.[name]) {
          return true
        }
        return false
      }

      const getGame = async (name: string) => {
        const snapshot = await database.ref(`games/${name}`).once('value')
        const value = await snapshot.val()

        return Promise.resolve(value)
      }

      if (typeof children === 'function') {
        return children({
          database,
          gameNameExists,
          createNewGame,
          getGame,
        } as FirebaseProviderReturnProps)
      }

      return children
    }}
  </FirebaseContext.Consumer>
)

export default FirebaseProvider
