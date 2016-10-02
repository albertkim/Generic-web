import {handleActions} from 'redux-actions'
import {IAction} from '../actions/actions'
import {GET_COMPANY_SUCCESS, CREATE_COMPANY_SUCCESS} from '../actions/company'
import {Company} from '../models/Company'

export const companyReducer = handleActions({
  [GET_COMPANY_SUCCESS]: (state: Company, action: IAction<GET_COMPANY_SUCCESS>) => {
    return action.payload
  },
  [CREATE_COMPANY_SUCCESS]: (state: Company, action: IAction<CREATE_COMPANY_SUCCESS>) => {
    return action.payload
  }
}, null)
