import { Meteor } from 'meteor/meteor'
import { ServiceConfiguration } from 'meteor/service-configuration'
import { BrowserPolicy } from 'meteor/browser-policy-common'

// mail service url
process.env.MAIL_URL = Meteor.settings.private.MAIL_URL

// third-party login services
ServiceConfiguration.configurations.upsert({
  service: 'facebook'
}, {
  $set: {
    appId: Meteor.settings.private.facebook.clientId,
    loginStyle: 'popup',
    secret: Meteor.settings.private.facebook.secret
  }
})

ServiceConfiguration.configurations.upsert({
  service: 'github'
}, {
  $set: {
    clientId: Meteor.settings.private.github.clientId,
    loginStyle: 'popup',
    secret: Meteor.settings.private.github.secret
  }
})

ServiceConfiguration.configurations.upsert({
  service: 'twitter'
}, {
  $set: {
    clientId: Meteor.settings.private.twitter.clientId,
    loginStyle: 'popup',
    secret: Meteor.settings.private.twitter.secret
  }
})

// Configurations for X-Frame-Options and Content-Security-Policy
BrowserPolicy.content.allowOriginForAll('*.googleapis.com')
BrowserPolicy.content.allowOriginForAll('*.gstatic.com')
BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com')
BrowserPolicy.content.allowFontDataUrl()
