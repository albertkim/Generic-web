import * as React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import {Footer} from './containers/Footer'
import NotificationBanner from './NotificationBanner'
import {ApplicationState} from './models/ApplicationState'
import {fetchCurrentUser} from './actions'

interface StateProps {}

interface DispatchProps {
  fetchCurrentUser: Function
}

function mapStateToProps(state: ApplicationState) : StateProps {
  return {}
}

function mapDispatchToProps(dispatch: any) : DispatchProps {
  return {
    fetchCurrentUser: bindActionCreators(fetchCurrentUser, dispatch)
  }
}

class App extends React.Component<StateProps & DispatchProps, void> {

  componentDidMount() {
    this.props.fetchCurrentUser()
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
