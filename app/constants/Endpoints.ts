import * as axios from 'axios'

const RootApi = 'http://localhost:81'

export default {
  ROOT_API_URL: RootApi,
  Axios: axios.create({
    baseURL: RootApi,
    headers: {
      Authentication: `bearer ${window.localStorage.getItem('authToken')}`
    }
  }),
  GET_PING: `/ping`,
  POST_LOGIN_EMAIL: `/api/v1/login`,
  POST_REGISTER_EMAIL: `/api/v1/register`
}
