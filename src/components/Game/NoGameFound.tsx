import React, { FC } from 'react'
import { A } from 'hookrouter'

const NoGameFound: FC<{}> = () => (
  <div>
    We couldn't find the game. Try entering the url again or go{' '}
    <A href="/" className="NoGameFound-Link">
      home
    </A>{' '}
    and start a new game.
  </div>
)

export default NoGameFound
