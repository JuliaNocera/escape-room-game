import React from 'react'
import { useRoutes } from 'hookrouter'

import Home from '../Home'
import Game from '../Game'
import { decodeString } from '../../lib/textHelpers'

type FixMe = any

// TODO: Use Query param for gameId
const routePaths = {
  '/': () => <Home />,
  '/game': () => <Game />,
  '/game/:id': ({ id }: FixMe) => {
    const decodedGameId = decodeString(id)
    return <Game gameId={decodedGameId} />
  },
}

const Routes = () => {
  const routeResult = useRoutes(routePaths)

  return routeResult || <Home />
}

export default Routes
