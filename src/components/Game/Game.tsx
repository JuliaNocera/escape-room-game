import React, { Component } from 'react'

import RoomRenderer from '../RoomRenderer'
import RoomContext, { Room } from '../RoomContext'
import {
  gameListener,
  completeRoom,
  cancelGameListener,
} from '../../lib/firebase/helpers'
import FirebaseContext from '../FirebaseContext'

export interface GameSettings {
  timer?: boolean
}

interface GameProps {
  gameId?: string
}

interface GameState {
  settings: GameSettings
  rooms: Room[]
  currentRoomIndex: number
  loading: boolean
  gameFound: boolean
}

class Game extends Component<GameProps, GameState> {
  static contextType = FirebaseContext

  state: GameState = {
    settings: {},
    rooms: [],
    currentRoomIndex: 0,
    loading: true,
    gameFound: true,
  }

  async componentDidMount() {
    const { fb } = this.context
    const { gameId } = this.props
    const db = fb.database()
    if (gameId) {
      this.setState({ loading: true }, () => {
        gameListener({
          db,
          name: gameId,
          onUpdate: this.onUpdate,
        })
      })
    } else {
      this.setState({ gameFound: false, loading: false })
    }
  }

  componentWillUnmount() {
    const { fb } = this.context
    const db = fb.database()
    cancelGameListener({ db, name: 'test' })
  }

  getCurrentRoom = (rooms: Room[]) => {
    // TODO: this shouldn't be determined by completed now that it is in state
    // it should always be currentState
    let currentRoomIndex = 0
    rooms.forEach((room, index) => {
      if (!room.completed) {
        currentRoomIndex = index
      }
    })
    return currentRoomIndex
  }

  completeRoom = (roomIndex: number) => {
    const { fb } = this.context
    const db = fb.database()
    completeRoom({ db, roomName: 'test', roomIndex })
  }

  goToRoom = (roomIndex: number) => {
    this.setState({ currentRoomIndex: roomIndex })
  }

  nextRoom = () => {
    const { currentRoomIndex, rooms } = this.state
    if (currentRoomIndex + 1 <= rooms.length - 1) {
      this.setState({
        currentRoomIndex: currentRoomIndex + 1,
      })
    }
  }

  prevRoom = () => {
    const { currentRoomIndex } = this.state
    if (currentRoomIndex - 1 >= 0) {
      this.setState({
        currentRoomIndex: currentRoomIndex - 1,
      })
    }
  }

  onUpdate = (game: firebase.database.DataSnapshot) => {
    const gameValue = game.val()
    this.setState({
      rooms: gameValue.rooms,
      loading: false,
    })
  }

  render() {
    const { rooms, currentRoomIndex, loading, gameFound } = this.state

    const roomContextValue = {
      rooms,
      currentRoomIndex,
      completeRoom: this.completeRoom,
      goToRoom: this.goToRoom,
      nextRoom: this.nextRoom,
      prevRoom: this.prevRoom,
      loading,
    }

    if (!loading && !gameFound) {
      return <div>No Game Found</div>
    }

    return (
      <RoomContext.Provider value={roomContextValue}>
        <RoomRenderer />
      </RoomContext.Provider>
    )
  }
}
export default Game
