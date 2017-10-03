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

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

export default Router
