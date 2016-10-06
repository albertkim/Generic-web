import {Company, ICreateCompany, IUpdateCompany} from '../models/Company'
import {IPromiseAction} from './actions'
import Endpoints from '../constants/Endpoints'

export const GET_COMPANY_REQUEST = 'GET_COMPANY_REQUEST'
export type GET_COMPANY_REQUEST = Company

export function getCompany(companyId: number): IPromiseAction<GET_COMPANY_REQUEST> {
  const request = new Promise((resolve, reject) => {
    Endpoints.Axios.get(Endpoints.GET_COMPANY.replace(':companyId', companyId.toString()))
      .then(response => {
        resolve(new Company(response.data))
      }).catch(reject)
  })

  return {
    type: GET_COMPANY_REQUEST,
    payload: request
  }
}

export const CREATE_COMPANY_REQUEST = 'CREATE_COMPANY_REQUEST'
export type CREATE_COMPANY_REQUEST = Company

export function createCompany(createObject: ICreateCompany): IPromiseAction<CREATE_COMPANY_REQUEST> {
  const request = new Promise((resolve, reject) => {
    Endpoints.Axios.post(Endpoints.POST_COMPANY, createObject)
      .then(response => {
        resolve(new Company(response.data))
      }).catch(reject)
  })

  return {
    type: CREATE_COMPANY_REQUEST,
    payload: request
  }
}

export const UPDATE_COMPANY_REQUEST = 'UPDATE_COMPANY_REQUEST'
export type UPDATE_COMPANY_REQUEST = Company

export function updateCompany(updateObject: IUpdateCompany) {
  const request = new Promise((resolve, reject) => {
    Endpoints.Axios.patch(
      Endpoints.UPDATE_COMPANY.replace(':companyId', updateObject.id.toString()),
      updateObject)
      .then(response => {
        resolve(new Company(response.data))
      }).catch(reject)
  })

  return {
    type: UPDATE_COMPANY_REQUEST,
    payload: request
  }
}
