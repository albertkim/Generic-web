import {observable} from 'mobx'
import Endpoints from '../constants/Endpoints'

export class ServerStore {
  @observable timer = 0
  @observable isConnectedToServer: 'Connecting' | 'Connected' | 'Disconnected'

  constructor() {
    this.isConnectedToServer = 'Connecting'
    setInterval(() => {
      this.timer += 1
    }, 1000);
  }

  connectToServer() {
    Endpoints.Axios.get(Endpoints.GET_PING).then(() => {
      this.isConnectedToServer = 'Connected'
    }).catch(error => {
      this.isConnectedToServer = 'Disconnected'
    })
  }

  resetTimer() {
    this.timer = 0
  }
}
