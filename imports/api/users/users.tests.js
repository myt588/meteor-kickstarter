
// Tests for the behavior of the Users collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor'
import { assert } from 'meteor/practicalmeteor:chai'
import { Accounts } from 'meteor/accounts-base'

if (Meteor.isServer) {
  describe('users collection', function () {
    beforeEach(function () {
      Meteor.users.remove({})
    })
    it('create correctly', function () {
      const userId = Accounts.createUser({ email: 'admin@test.com', username: 'admin', password: 'admin' })
      const added = Meteor.users.find({ _id: userId })
      const collectionName = added._getCollectionName()
      const count = added.count()

      assert.equal(collectionName, 'users')
      assert.equal(count, 1)
    })
  })
}
