var React = require('react')
var MailboxesView = require('../views/Mailboxes.react')
var IndexView = require('../views/Index.react')
var Mailboxes = require('../collections/Mailboxes')

module.exports = function () {
  var mailboxes = new Mailboxes()

  mailboxes.fetch()

  React.render(
    (<div>
      <div id='side-panel'>
        <MailboxesView mailboxes={mailboxes} />
      </div>
      <div id="content">
        <IndexView />
      </div>
    </div>),
    document.getElementById('main')
  )
}
