import { createContext } from "react";

const noop = () => {};

export interface Room {
  completed: boolean;
  displayName: string;
}

export interface RoomContextProps {
  rooms: Room[];
  currentRoom: number;
  goToRoom: (roomNumber: number) => void;
  nextRoom: () => void;
  prevRoom: () => void;
}

export default createContext<RoomContextProps>({
  rooms: [],
  currentRoom: 0,
  goToRoom: noop,
  nextRoom: noop,
  prevRoom: noop,
});
