import React from 'react'

import Button from '../Button'
import RoomContext from '../RoomContext'
import { RoomOne, RoomTwo, RoomThree } from '../Rooms'

const ROOM_RENDERERS = [<RoomOne />, <RoomTwo />, <RoomThree />]

const RoomRenderer = () => (
  <RoomContext.Consumer>
    {({ currentRoomIndex, goToRoom, loading }) => {
      if (loading) {
        return <div>....Loading</div>
      }
      console.log({ currentRoomIndex })
      return (
        <>
          <Button
            size={Button.SIZE.SMALL}
            type={Button.TYPE.PLAIN}
            onClick={() => goToRoom(0)}
          >
            First Room
          </Button>
          <Button size={Button.SIZE.MEDIUM} onClick={() => goToRoom(1)}>
            Second Room
          </Button>
          <Button onClick={() => goToRoom(2)}>Third Room</Button>
          {ROOM_RENDERERS[currentRoomIndex]}
        </>
      )
    }}
  </RoomContext.Consumer>
)

export default RoomRenderer
