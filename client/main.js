import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'

import App from '../imports/startup/client/app.js'

Meteor.startup(() => {
  render(<App />, document.getElementById('app'))
})
