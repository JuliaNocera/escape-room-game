import { GameSettings } from '../Game/Game'

export interface CreateGameParams {
  name: string
  settings?: GameSettings
  onFinish?: (name: string) => void
}

export type CreateGameNameFunc = ({
  name,
  settings,
  onFinish,
}: CreateGameParams) => void

export type GameNameExistsFunc = (name: string) => Promise<boolean>

export interface FirebaseProviderReturnProps {
  createNewGame: CreateGameNameFunc
  gameNameExists: GameNameExistsFunc
  [key: string]: any
  database: firebase.database.Database
}
