import {User} from './models/User'

export interface IAction<T> {
  type: string
  payload: T
  error?: boolean
  meta?: any
}

export const LOGIN_USER_REQUESET = 'LOGIN_USER_REQUESET'
export type LOGIN_USER_REQUESET = {email: string, password: string}
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export type FETCH_USER_REQUEST = {}
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export type LOGOUT_USER_REQUEST = {}

export function login(email: string, password: string) : IAction<LOGIN_USER_REQUESET> {
  return {
    type: LOGIN_USER_REQUESET,
    payload: {
      email: email,
      password: password
    }
  }
}

export function fetchCurrentUser() : IAction<FETCH_USER_REQUEST> {
  return {
    type: FETCH_USER_REQUEST,
    payload: {}
  }
}

export function logout() : IAction<LOGOUT_USER_REQUEST> {
  return {
    type: LOGOUT_USER_REQUEST,
    payload: {}
  }
}
