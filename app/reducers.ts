import {handleActions} from 'redux-actions'
import {ApplicationState} from './models/ApplicationState'
import {User} from './models/User'
import {Action, LOGIN_USER_REQUEST, FETCH_USER_REQUEST, LOGOUT_USER_REQUEST} from './actions'

const INITIAL_STATE : ApplicationState = {}

export const reducers = handleActions({

  LOGIN_USER_REQUEST: function(state = {}, action: Action<LOGIN_USER_REQUEST>) {
    return {
      user: action.payload.user
    }
  },

  FETCH_USER_REQUEST: function(state = {}, action: Action<FETCH_USER_REQUEST>) {
    return state
  },

  LOGOUT_USER_REQUEST: function(state = {}, action: Action<LOGOUT_USER_REQUEST>) {
    return state
  }

}, INITIAL_STATE)

// const reducers = function(state = {}, action: Action<any>) : ApplicationState {

//   console.log('Action type ', action.type)

//   switch (action.type) {
//     case LOGIN_USER_REQUEST:
//       return {
//         user: {
//           email: 'email@email.com',
//           isEmailVerified: false
//         }
//       }
//     case FETCH_USER_REQUEST:
//       return state
//     case LOGOUT_USER_REQUEST:
//       return {
//         user: undefined  
//       }
//     default: 
//       return state
//   }

// }
