// Server entry point, imports all server code

import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'
import '/imports/startup/server'
import '/imports/startup/both'

Meteor.startup(() => {
  // code to run on server at startup
})
