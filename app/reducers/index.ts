import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import {User} from '../models/User'
import {IError} from '../models/Error'
import {IUserPreference} from '../models/UserPreference'
import {userReducers} from './userReducers'
import {userPreferenceReducers} from './userPreferenceReducers'
import {isConnectedToServerReducers} from './isConnectedToServerReducers'
import {errorsReducer} from './errorsReducers'

// I have not figured out how to sync an ApplicationState interface with a reducer, so it'll be done here manually
export interface ApplicationState {
  user?: User,
  userPreferences: IUserPreference[],
  isConnectedToServer?: boolean,
  routing: any,
  errors: IError[]
}

export const reducers = combineReducers({
  user: userReducers,
  userPreferences: userPreferenceReducers,
  isConnectedToServer: isConnectedToServerReducers,
  routing: routerReducer,
  errors: errorsReducer
})
