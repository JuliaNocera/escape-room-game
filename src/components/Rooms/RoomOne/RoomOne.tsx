import React from "react";

import Button from '../../Button'
import Modal from '../../Modal'
import PuzzleContainer from '../../PuzzleContainer';
import RoomContext from '../../RoomContext';
import useModalState from '../../../hooks/useModalState';

const RoomOne = () => {

  const { isOpen, setIsOpen } = useModalState()

  return (
    <RoomContext.Consumer>
      {({currentRoom, nextRoom}) => (
        <div>
          <h1>{currentRoom.displayName}</h1>
          <Button onClick={nextRoom} > Next Room </Button>
          <Button
            type={Button.TYPE.PLAIN}
            onClick={() => setIsOpen(true)}
          >
            Show Modal
          </Button>
          <div>TODO: all the things</div>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <PuzzleContainer><h1>Hello Puzzle</h1></PuzzleContainer>
          </Modal>
        </div>
      )}
    </RoomContext.Consumer>
  );
};

export default RoomOne;