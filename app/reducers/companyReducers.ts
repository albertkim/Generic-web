import {handleActions} from 'redux-actions'
import {IAction} from '../actions/actions'
import {GET_COMPANY_REQUEST, CREATE_COMPANY_REQUEST, UPDATE_COMPANY_REQUEST} from '../actions/company'
import {Company} from '../models/Company'

export const companyReducer = handleActions({
  [GET_COMPANY_REQUEST]: (state: Company, action: IAction<GET_COMPANY_REQUEST>) => {
    if (action.error) {
      return null
    } else {
      return action.payload
    }
  },
  [CREATE_COMPANY_REQUEST]: (state: Company, action: IAction<CREATE_COMPANY_REQUEST>) => {
    if (action.error) {
      return null
    } else {
      return action.payload
    }
  }
}, null)
