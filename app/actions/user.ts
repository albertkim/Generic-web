import {User} from '../models/User'
import {IThunkAction} from './actions'
import {ADD_ERROR} from './errors'
import Endpoints from '../constants/Endpoints'
import {ICompanyUser} from '../models/Company'

export const GET_MY_COMPANIES_SUCCESS = 'GET_MY_COMPANIES_SUCCESS'
export type GET_MY_COMPANIES_SUCCESS = ICompanyUser[]

export const GET_MY_COMPANIES_ERROR = 'GET_MY_COMPANIES_ERROR'

export function getMyCompanies(): IThunkAction<void, void, void> {
  return (dispatch, getState, extraArg) => {
    const request = Endpoints.Axios.get(Endpoints.GET_MY_COMPANIES)

    request.then((response: any) => {
      dispatch({
        type: GET_MY_COMPANIES_SUCCESS,
        payload: response.data
      })
    }).catch((error: any) => {
      dispatch({
        type: ADD_ERROR,
        payload: {
          type: GET_MY_COMPANIES_ERROR,
          error: error
        }
      })
    })
  }
}

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
