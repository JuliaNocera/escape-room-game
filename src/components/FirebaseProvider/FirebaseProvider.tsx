import React, { PropsWithChildren } from 'react'

import FirebaseContext from '../FirebaseContext'

interface GameSettings {
  timer?: boolean
}

const FirebaseProvider = ({ children }: PropsWithChildren<{}>) => (
  <FirebaseContext.Consumer>
    {({ database }) => {
      const createNewGame = (
        name: string,
        settings: GameSettings = { timer: false }
      ) => {
        // TODO: sanitize user input
        database.ref('games/' + name).set({
          name,
          settings
        })
      }

      const isGameNameValid = (name: string) => {
        // TODO: read from db to validate if name already exists
        // TODO: create validation rules for input
        // database.ref('games/' + name).set({
        //   name,
        // })
        return true
      }

      if (typeof children === 'function') {
        return children({ database, isGameNameValid, createNewGame })
      }

      return children
    }}
  </FirebaseContext.Consumer>
)

export default FirebaseProvider
