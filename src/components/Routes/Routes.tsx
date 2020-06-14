import React from 'react';
import {useRoutes} from 'hookrouter';

import Home from '../Home';
import Game from '../Game';


const routePaths = {
    '/': () => <Home />,
    '/game': () => <Game />,
};

const Routes = () => {
  const routeResult = useRoutes(routePaths);
  return routeResult || <Home />
}

export default Routes;
