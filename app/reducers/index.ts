import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {User} from '../models/User'
import {userReducers} from './userReducers'
import {isConnectedToServerReducers} from './isConnectedToServerReducers'

// I have not figured out how to sync an ApplicationState interface with a reducer, so it'll be done here manually
export interface ApplicationState {
  user?: User,
  isConnectedToServer?: boolean,
  routing: any
}

export const reducers = combineReducers({
  user: userReducers,
  isConnectedToServer: isConnectedToServerReducers,
  routing: routerReducer
})
