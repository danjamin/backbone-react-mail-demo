var React = require('react')
var MailboxesView = require('../views/Mailboxes.react')
var MessagesView = require('../views/Messages.react')
var Mailboxes = require('../collections/Mailboxes')

module.exports = function (id) {
  var MailboxesViewF = React.createFactory(MailboxesView)
  var MessagesViewF = React.createFactory(MessagesView)
  var mailboxes = new Mailboxes()

  React.render(
    MailboxesViewF({collection: mailboxes}),
    document.getElementById('side-panel')
  )

  mailboxes.fetch({
    success: function(collection, response, options) {
      var messages = collection.get(id).messages
      messages.fetch()

      React.render(
        MessagesViewF({collection: messages}),
        document.getElementById('content')
      )
    }
  })
}
