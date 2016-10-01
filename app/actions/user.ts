import {User} from '../models/User'
import {IThunkAction} from './actions'
import Endpoints from '../constants/Endpoints'

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export type UPDATE_USER_REQUEST = any

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export type UPDATE_USER_SUCCESS = {user: User}

export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR'
export type UPDATE_USER_ERROR = {error: any}

export function updateUser(updateUser: any, callback?: (error?: any, data?: User) => void):
  IThunkAction<void, UPDATE_USER_SUCCESS | UPDATE_USER_ERROR, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.patch(Endpoints.PATCH_ME, updateUser)

    request.then((response: any) => {
      callback(null, response.data)
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          user: response.data
        }
      })
    }).catch((error: any) => {
      callback(error)
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: {
          error: error
        }
      })
    })
  }
}
