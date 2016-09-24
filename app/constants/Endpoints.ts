import * as axios from 'axios'

const RootApi = 'http://localhost:81'

export default {
  RootApi: RootApi,
  Axios: axios.create({
    baseURL: RootApi,
    headers: {
      Authentication: `bearer ${window.localStorage.getItem('authToken')}`
    }
  })
}
