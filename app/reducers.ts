import {User} from './models/User'
import {IAction, FETCH_USER_REQUEST} from './actions'

export interface ApplicationState {
  user?: User
}

const INITIAL_STATE : ApplicationState = {
  user: null
}

export const reducers = function(state = INITIAL_STATE, action: IAction) : ApplicationState {

  switch (action.type) {
    case FETCH_USER_REQUEST:
      console.log(FETCH_USER_REQUEST)
      return state
    default: 
      return state
  }

}
