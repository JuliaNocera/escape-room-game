import React from 'react'
import { A } from 'hookrouter'

import './styles.scss'

import RoomProvider from './components/RoomProvider'
import Routes from './components/Routes'
import FirebaseContext from './components/FirebaseContext'
import { initFirebase } from './lib/firebase/firebase'

const App = () => {
  const fb = initFirebase()
  return (
    <div className="App">
      <FirebaseContext.Provider value={{ fb }}>
        <RoomProvider>
          <header className="App-header">
            <A href="/" className="App-nav-item">
              Home
            </A>
            <A href="/game" className="App-nav-item">
              Game
            </A>
          </header>
          <div className="App-body">
            <Routes />
          </div>
        </RoomProvider>
      </FirebaseContext.Provider>
    </div>
  )
}

export default App
