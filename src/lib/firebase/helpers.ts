type Database = firebase.database.Database

export const gameListener = async ({
  db,
  name,
  onUpdate,
}: {
  db: Database
  name: string
  onUpdate: (game: any) => void
}) => {
  db.ref(`games/${name}`).on('value', onUpdate)
}

export const completeRoom = async ({
  db,
  roomName,
  roomIndex,
}: {
  db: Database
  roomName: string
  roomIndex: number
}) => {
  const updates = {
    [`games/${roomName}/rooms[${roomIndex}]/completed`]: true,
  }
  db.ref().update(updates)
}
