var Backbone = require('backbone')
var React = require('react')
var MailboxesView = require('./views/Mailboxes.react')
var IndexView = require('./views/Index.react')
var Mailboxes = require('./collections/Mailboxes')

module.exports = Backbone.Router.extend({
  routes : {
    "" : "index"
  },
  index : function () {
    var MailboxesViewF = React.createFactory(MailboxesView)
    var IndexViewF = React.createFactory(IndexView)

    var mailboxes = new Mailboxes()
    mailboxes.fetch()
    React.render(
      MailboxesViewF({collection: mailboxes}),
      document.getElementById('side-panel')
    )

    React.render(
      IndexViewF(),
      document.getElementById('content')
    )
  }
})
