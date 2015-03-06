var React = require('react')
var MailboxesView = require('../Mailboxes.react')

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div id='side-panel'>
          <MailboxesView mailboxes={this.props.mailboxes} />
        </div>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    )
  }
})
