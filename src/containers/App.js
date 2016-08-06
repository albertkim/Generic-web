import React from 'react'
import NavigationBar from '../components/NavigationBar'

export class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
}
