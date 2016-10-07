import * as React from 'react'
import {connect} from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import NotificationBanner from './containers/NotificationBanner'
import {fetchCurrentUser, connectToServer} from './actions/actions'

interface DispatchProps {
  fetchCurrentUser: Function,
  connectToServer: Function
}

class App extends React.Component<DispatchProps, void> {

  componentDidMount() {
    this.props.fetchCurrentUser()

    this.props.connectToServer()
    // setInterval(() => this.props.connectToServer(), 10000)
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

export default connect(null, {fetchCurrentUser, connectToServer})(App)
