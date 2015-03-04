var Backbone = require('backbone')

var Messages = require('../collections/Messages.js')

module.exports = Backbone.Model.extend({
  initialize: function () {
    this.messages = new Messages()
    this.messages.url = '/fixtures/box/' + this.id + '/messages.json'
  }
})
