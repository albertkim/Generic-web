import {ApplicationState} from './models/ApplicationState'
import {User} from './models/User'
import {Action, LOGIN_USER_REQUEST, FETCH_USER_REQUEST, LOGOUT_USER_REQUEST} from './actions'

const INITIAL_STATE : ApplicationState = {
  user: undefined
}

export const reducers = function(state = INITIAL_STATE, action: Action<any>) : ApplicationState {

  console.log('Action type ', action.type)

  switch (action.type) {
    case LOGIN_USER_REQUEST:
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
