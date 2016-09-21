import {User} from './models/User'

export interface Action<T> {
  type: string
  payload: T
  error?: boolean
  meta?: any
}

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export type LOGIN_USER_REQUEST = {email: string, password: string}
export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST'
export type FETCH_USER_REQUEST = {}
export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export type LOGOUT_USER_REQUEST = {}

export function login(email: string, password: string) : Action<LOGIN_USER_REQUEST> {
  return {
    type: LOGIN_USER_REQUEST,
    payload: {
      email: email,
      password: password
    }
  }
}

export function fetchCurrentUser() : Action<FETCH_USER_REQUEST> {
  return {
    type: FETCH_USER_REQUEST,
    payload: {}
  }
}

export function logout() : Action<LOGOUT_USER_REQUEST> {
  return {
    type: LOGOUT_USER_REQUEST,
    payload: {}
  }
}
