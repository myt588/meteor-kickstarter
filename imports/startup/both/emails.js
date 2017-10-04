import { Accounts } from 'meteor/accounts-base'

Accounts.emailTemplates.siteName = 'Meteor-Kickstarter'
Accounts.emailTemplates.from = 'Meteor-Kickstarter <accounts@example.com>'

Accounts.emailTemplates.verifyEmail = {
  subject () {
    return '[Meteor-Kickstarter] Verify Your Email Address'
  },
  text (user, url) {
    let emailAddress = user.emails[0].address
    let urlWithoutHash = url.replace('#/', '')
    let supportEmail = 'support@example.com'
    return `Hi! \n\n
    To verify your email address (${emailAddress}) visit the following link:
    \n\n${urlWithoutHash}\n\n 
    If you did not request this verification, please ignore this email. \n
    If you feel something is wrong, please contact our support team: ${supportEmail}. \n
    Thanks, \n
    The Meteor-Kickstarter team`
  }
}

Accounts.emailTemplates.resetPassword = {
  subject (user) {
    return '[Meteor-Kickstarter] Reset your password'
  },
  text (user, url) {
    let urlWithoutHash = url.replace('#/', '')
    return `Hello! \n\n
    Click the link below to reset your password on Meteor-Kickstarter.
    \n\n ${urlWithoutHash} \n\n
    If you didn't request this email, please ignore it. \n
    Thanks, \n
    The Meteor-Kickstarter team`
  },
  html (user, url) {
    //  An optional Function that takes a user object and a url, and returns the body html for a reset password email.
  }
}

Accounts.emailTemplates.enrollAccount = {
  subject () {
    return '[Meteor-Kickstarter] Enroll your account'
  },
  text (user, url) {
    let urlWithoutHash = url.replace('#/', '')
    return `Hi! \n\n
    You have been selected to participate in building a better future! \n
    To activate your account, simply click the link below:
    \n\n${urlWithoutHash}\n\n
    Thanks,\n
    The Meteor-Kickstarter team`
  }
}
