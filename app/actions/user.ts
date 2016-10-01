import {User} from '../models/User'
import {IThunkAction} from './actions'
import Endpoints from '../constants/Endpoints'

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export type UPDATE_USER_REQUEST = any

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export type UPDATE_USER_SUCCESS = {user: User}

export const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR'
export type UPDATE_USER_ERROR = {error: any}

export function updateUser(updateUser: any):
  IThunkAction<void, UPDATE_USER_SUCCESS | UPDATE_USER_ERROR, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.post(Endpoints.PATCH_ME, updateUser)

    request.then((response: any) => {
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          user: response.data
        }
      })
    }).catch((error: any) => {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: {
          error: error
        }
      })
    })
  }
}
