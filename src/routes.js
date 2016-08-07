var React = require('react')
var Route = require('react-router').Route
var IndexRoute = require('react-router').IndexRoute
var NavigationBar = require( './containers/NavigationBar').NavigationBar
var Footer = require('./containers/Footer').Footer
var Home = require('./containers/Home').Home
var Register = require('./containers/register').Register
var Login = require('./containers/login').Login
var About = require('./containers/about').About
var Contact = require('./containers/contact').Contact
var Profile = require('./containers/profile').Profile

var App = React.createClass({
  render: function() {
    return (
      <div>
        <NavigationBar />
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
})

module.exports = {
  routes: (
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />
      <Route path="about" component={ About } />
      <Route path="contact" component={ Contact } />
      <Route path="login" component={ Login } />
      <Route path="register" component={ Register } />
      <Route path="profile" component={ Profile } />
    </Route>
  )
}
