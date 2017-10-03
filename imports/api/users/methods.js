import { Meteor } from 'meteor/meteor'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import { Accounts } from 'meteor/accounts-base'

export const update = new ValidatedMethod({
  name: 'users.update',
  validate: null,
  run: function ({user}) {
    Meteor.users.update(user._id, {
      $set: user
    })
  }
})

export const create = new ValidatedMethod({
  name: 'users.create',
  validate: null,
  run: function ({username, email, password}) {
    return Accounts.createUser({ email: 'admin@test.com', username: 'admin', password: 'admin' })
  }
})

export const createUserWithUsername = new ValidatedMethod({
  name: 'users.createUserWithUsername',
  validate: null,
  run: function ({ username }) {
    return Accounts.createUser({ username })
  }
})

export const getByUsername = new ValidatedMethod({
  name: 'users.getByUsername',
  validate: null,
  run: function ({ username }) {
    return Meteor.users.findOne({ username })
  }
})

export const getOne = new ValidatedMethod({
  name: 'users.getOne',
  validate: null,
  run: function ({_id}) {
    return Meteor.users.findOne({_id})
  }
})
