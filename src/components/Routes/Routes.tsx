import React from 'react'
import { useRoutes } from 'hookrouter'

import Home from '../Home'
import Game from '../Game'

type FixMe = any

// TODO: Use Query param for gameId
const routePaths = {
  '/': () => <Home />,
  '/game': () => <Game />,
  '/game/:id': ({ id }: FixMe) => <Game gameId={id} />,
}

const Routes = () => {
  const routeResult = useRoutes(routePaths)

  return routeResult || <Home />
}

export default Routes
