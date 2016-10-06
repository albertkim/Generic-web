import Axios from 'axios'

const RootApi = 'http://localhost:80'

const axios = Axios.create({
  baseURL: RootApi,
  headers: {
    Authorization: `bearer ${window.localStorage.getItem('authToken')}`
  }
})

export default {
  ROOT_API_URL: RootApi,
  Axios: axios,
  GET_PING: `/ping`,
  POST_LOGIN_EMAIL: `/api/v1/login`,
  POST_REGISTER_EMAIL: `/api/v1/register`,
  GET_ME: `/api/v1/user/me`,
  PATCH_ME: `/api/v1/user/me`,
  GET_USER_PREFERENCES: `/api/v1/user/me/preferences`,
  PATCH_USER_PREFERENCES: `/api/v1/user/me/preferences`,
  GET_MY_COMPANIES: `/api/v1/user/me/companies`,
  GET_COMPANY: `/api/v1/company/:companyId`,
  POST_COMPANY: `/api/v1/company`,
  UPDATE_COMPANY: `/api/v1/company/:companyId`
}
