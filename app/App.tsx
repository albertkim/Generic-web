import * as React from 'react'
import {connect} from 'react-redux'
import NavigationBar from './containers/NavigationBar'
import {Footer} from './containers/Footer'
import NotificationBanner from './NotificationBanner'
import {fetchCurrentUser} from './actions'

interface AppProps {
  fetchCurrentUser: Function
}

function mapStateToProps(state: any) : any {
  return {}
}

class App extends React.Component<AppProps, void> {

  componentWillMount() {
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

export default connect(mapStateToProps, {fetchCurrentUser})(App)
