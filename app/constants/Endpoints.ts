import * as axios from 'axios'

const RootApi = 'http://localhost:80'

const Axios = axios.create({
  baseURL: RootApi,
  headers: {
    Authorization: `bearer ${window.localStorage.getItem('authToken')}`
  }
})

export default {
  ROOT_API_URL: RootApi,
  Axios: Axios,
  GET_PING: `/ping`,
  POST_LOGIN_EMAIL: `/api/v1/login`,
  POST_REGISTER_EMAIL: `/api/v1/register`,
  GET_ME: `/api/v1/user/me`,
  PATCH_ME: `/api/v1/user/me`
}
