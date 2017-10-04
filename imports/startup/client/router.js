import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/reset-password/:token' component={Reset} />
            <Route exact path='/verify-email/:token' component={Verify} />
            <Route exact path='/enroll-account/:token' component={Enroll} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const Home = () => (
  <div>
    <h2>Welcome!</h2>
  </div>
)

const Reset = () => (
  <div>
    <h2>Reset your email!</h2>
  </div>
)

const Verify = () => (
  <div>
    <h2>Verify your email!</h2>
  </div>
)

const Enroll = () => (
  <div>
    <h2>Enroll your account!</h2>
  </div>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Router
