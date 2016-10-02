import {IThunkAction} from './actions'
import {ADD_ERROR} from './errors'
import {IError} from '../models/Error'
import {IUserPreference} from '../models/UserPreference'
import Endpoints from '../constants/Endpoints'

export const FETCH_USER_PREFERENCE_REQUEST = 'FETCH_USER_PREFERENCE_REQUEST'
export type FETCH_USER_PREFERENCE_REQUEST = {}

export const FETCH_USER_PREFERENCE_SUCCESS = 'FETCH_USER_PREFERENCE_SUCCESS'
export type FETCH_USER_PREFERENCE_SUCCESS = {userPreferences: IUserPreference[]}

export const FETCH_USER_PREFERENCE_ERROR = 'FETCH_USER_PREFERENCE_ERROR'

export function fetchUserPreferences(): IThunkAction<void, FETCH_USER_PREFERENCE_REQUEST, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.get(Endpoints.GET_USER_PREFERENCES)

    request.then((response: any) => {
      dispatch({
        type: FETCH_USER_PREFERENCE_SUCCESS,
        payload: response.data
      })
    }).catch((error: any) => {
      dispatch({
        type: ADD_ERROR,
        payload: {
          type: FETCH_USER_PREFERENCE_ERROR,
          error: error
        }
      })
    })
  }
}

export const UPDATE_USER_PREFERENCE_REQUEST = 'UPDATE_USER_PREFERENCE_REQUEST'
export type UPDATE_USER_PREFERENCE_REQUEST = {}

export const UPDATE_USER_PREFERENCE_SUCCESS = 'UPDATE_USER_PREFERENCE_SUCCESS'
export type UPDATE_USER_PREFERENCE_SUCCESS = {userPreferences: IUserPreference[]}

export const UPDATE_USER_PREFERENCE_ERROR = 'UPDATE_USER_PREFERENCE_ERROR'

interface IUpdateUserPreference {
  preferenceId: number,
  value: boolean
}

export function updateUserPreference(preferenceUpdate: IUpdateUserPreference, callback?: (error?: any) => void):
  IThunkAction<void, UPDATE_USER_PREFERENCE_REQUEST, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.patch(Endpoints.PATCH_USER_PREFERENCES, preferenceUpdate)

    request.then((response: any) => {
      if (callback) { callback() }
      dispatch({
        type: UPDATE_USER_PREFERENCE_SUCCESS,
        payload: {
          userPreferences: response.data.userPreferences
        }
      })
    }).catch((error: any) => {
      if (callback) { callback(error) }
      dispatch({
        type: ADD_ERROR,
        payload: {
          type: UPDATE_USER_PREFERENCE_ERROR,
          error: error
        }
      })
    })
  }
}
