import SimpleSchema from 'simpl-schema'
import { Meteor } from 'meteor/meteor'

Meteor.users.deny({
  create: function () {
    return true
  },
  update: function () {
    return true
  },
  remove: function () {
    return true
  }
})

const UserProfileSchema = new SimpleSchema({
  name: {
    type: String
  },
  thumbnail: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    optional: true
  }
})

const UserSchema = new SimpleSchema({
  createdAt: {
    type: Date
  },
  username: {
    type: String,
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  profile: {
    type: UserProfileSchema,
    optional: true
  },
  // Make sure this services field is in your schema if you're using any of the accounts packages
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  // In order to avoid an 'Exception in setInterval callback' from Meteor
  heartbeat: {
    type: Date,
    optional: true
  }
})

Meteor.users.attachSchema(UserSchema)
