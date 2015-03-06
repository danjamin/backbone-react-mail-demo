var React = require('react')
var MailboxesView = require('../views/Mailboxes.react')
var MessagesView = require('../views/Messages.react')
var Mailboxes = require('../collections/Mailboxes')
var Messages = require('../collections/Messages')

module.exports = function (id) {
  var mailboxes = new Mailboxes()
  var messages = new Messages(id)

  mailboxes.fetch()
  messages.fetch()

  React.render(
    (
      <div>
        <div id='side-panel'>
          <MailboxesView mailboxes={mailboxes} />
        </div>
        <div id="content">
          <MessagesView messages={messages} />
        </div>
      </div>
    ),
    document.getElementById('main')
  )
}
