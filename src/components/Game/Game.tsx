import React, { Component } from 'react'

import RoomRenderer from '../RoomRenderer'
import { Room } from '../RoomContext/RoomContext'
import { gameListener, completeRoom } from '../../lib/firebase/helpers'
import FirebaseContext from '../FirebaseContext'

export interface GameSettings {
  timer?: boolean
}

interface GameState {
  settings: GameSettings
  rooms: Room[]
  currentRoomIndex: number
}

class Game extends Component<{}, GameState> {
  static contextType = FirebaseContext

  state: GameState = {
    settings: {},
    rooms: [],
    currentRoomIndex: 0,
  }

  async componentDidMount() {
    const { fb } = this.context
    const db = fb.database()
    const game = await gameListener({
      db,
      name: 'test',
      onUpdate: this.onUpdate,
    })
    console.log(game)
  }

  getCurrentRoom = (rooms: Room[]) => {
    let currentRoomIndex = 0
    rooms.forEach((room, index) => {
      if (!room.completed) {
        currentRoomIndex = index
      }
    })
    return currentRoomIndex
  }

  nextRoom = () => {
    const { currentRoomIndex } = this.state
    const { fb } = this.context
    const db = fb.database()
    completeRoom({ db, roomName: 'test', roomIndex: currentRoomIndex })
  }

  onUpdate = (game: firebase.database.DataSnapshot) => {
    const gameValue = game.val()
    this.setState({
      rooms: gameValue.rooms,
      currentRoomIndex: this.getCurrentRoom(gameValue.rooms),
    })
  }

  render() {
    return <RoomRenderer />
  }
}
export default Game
