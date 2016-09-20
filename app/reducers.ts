import {User} from './models/User'
import {IAction, LOGIN_USER_REQUESET, FETCH_USER_REQUEST, LOGOUT_USER_REQUEST} from './actions'

export interface ApplicationState {
  user?: User
}

const INITIAL_STATE : ApplicationState = {
  user: undefined
}

export const reducers = function(state = INITIAL_STATE, action: IAction<any>) : ApplicationState {

  console.log('Action type ', action.type)

  switch (action.type) {
    case LOGIN_USER_REQUESET:
      return {
        user: {
          email: 'email@email.com',
          isEmailVerified: false
        }
      }
    case FETCH_USER_REQUEST:
      return state
    case LOGOUT_USER_REQUEST:
      return {
        user: undefined  
      }
    default: 
      return state
  }

}
