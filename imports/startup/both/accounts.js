import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

Accounts.urls.resetPassword = function reset (token) {
  return Meteor.absoluteUrl('reset-password/' + token)
}

Accounts.urls.verifyEmail = function reset (token) {
  return Meteor.absoluteUrl('verify-email/' + token)
}

Accounts.urls.enrollAccount = function reset (token) {
  return Meteor.absoluteUrl('enroll-account/' + token)
}
