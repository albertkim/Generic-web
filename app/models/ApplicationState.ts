import {User} from './User'

export interface ApplicationState {
  user?: User,
  isUserLoading: boolean
}
