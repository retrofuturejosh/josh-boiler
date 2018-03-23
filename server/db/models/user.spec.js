/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      let cody

      beforeEach(() => {
        return User.create({
          username: 'josh123',
          region: 'NYC',
          zipcode: 10036,
          email: 'Joshuadsohn@gmail.com'
        })
          .then(user => {
            console.log('User created!, ', user)
          })
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
}) // end describe('User model')
