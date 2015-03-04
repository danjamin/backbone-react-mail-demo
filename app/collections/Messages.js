var Backbone = require('backbone')
var Message = require('../models/Message')

module.exports = Backbone.Collection.extend({
  model: Message
})
