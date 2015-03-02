var Backbone = require('backbone')
var Mailbox = require('../models/Mailbox')

module.exports = Backbone.Collection.extend({
  model: Mailbox,
  url: '/fixtures/mailboxes.json'
})
