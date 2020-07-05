import React from 'react'

import Button from '../../Button'
import Modal from '../../Modal'
import PuzzleContainer from '../../PuzzleContainer'
import RoomContext from '../../RoomContext'
import useModalState from '../../../hooks/useModalState'

const RoomThree = () => {
  const { isOpen, setIsOpen } = useModalState()

  return (
    <RoomContext.Consumer>
      {({ currentRoomIndex, rooms, nextRoom, prevRoom }) => {
        return (
          <div>
            <h1>{rooms[currentRoomIndex].displayName}</h1>
            <Button size={Button.SIZE.SMALL} onClick={prevRoom}>
              {' '}
              Previous Room{' '}
            </Button>
            <Button size={Button.SIZE.SMALL} onClick={nextRoom}>
              Next Room
            </Button>
            <Button
              size={Button.SIZE.SMALL}
              type={Button.TYPE.PLAIN}
              onClick={() => setIsOpen(true)}
            >
              Show Modal
            </Button>
            <div>TODO: all the things</div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <PuzzleContainer>
                <h1>Hello Puzzle Room 3</h1>
              </PuzzleContainer>
            </Modal>
          </div>
        )
      }}
    </RoomContext.Consumer>
  )
}

export default RoomThree
