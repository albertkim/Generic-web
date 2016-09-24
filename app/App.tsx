import * as React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import {Footer} from './containers/Footer'
import NotificationBanner from './NotificationBanner'
import {ApplicationState} from './models/ApplicationState'
import {fetchCurrentUser, connectToServer} from './actions/actions'

interface StateProps {}

interface DispatchProps {
  fetchCurrentUser: Function,
  connectToServer: Function
}

function mapStateToProps(state: ApplicationState): StateProps {
  return {}
}

function mapDispatchToProps(dispatch: any): DispatchProps {
  return {
    fetchCurrentUser: bindActionCreators(fetchCurrentUser, dispatch),
    connectToServer: bindActionCreators(connectToServer, dispatch)
  }
}

class App extends React.Component<StateProps & DispatchProps, void> {

  componentDidMount() {
    this.props.fetchCurrentUser()
    this.props.connectToServer()
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <NotificationBanner />
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
