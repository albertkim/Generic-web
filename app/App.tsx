import * as React from 'react'
import {inject, observer} from 'mobx-react'
import {ServerStore} from './stores/ServerStore'
import {CurrentUserStore} from './stores/CurrentUserStore'
import {UserCompaniesStore} from './stores/UserCompaniesStore'
import {NavigationBar} from './containers/NavigationBar'
import {NotificationBanner} from './containers/NotificationBanner'

interface StoreProps {
  serverStore?: ServerStore
  currentUserStore?: CurrentUserStore,
  userCompaniesStore?: UserCompaniesStore
}

@inject('serverStore', 'currentUserStore', 'userCompaniesStore')
@observer
export class App extends React.Component<StoreProps, void> {

  componentDidMount() {
    // this.props.fetchCurrentUser()
    this.props.currentUserStore!.getCurrentUser()
    this.props.serverStore!.connectToServer()
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <NotificationBanner />
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }

}
