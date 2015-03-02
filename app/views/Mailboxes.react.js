require('./mailboxes.css')

var React = require('react')

require('react.backbone') // self binding

var Mailbox = require('./Mailbox.react')

module.exports = React.createBackboneClass({
  displayName: 'Mailboxes',

  render: function () {
    var items = this.getCollection().map(function (mailbox) {
      return (
        <Mailbox key={mailbox.get('id')} model={mailbox} />
      )
    })

    return (
      <ul className="mailboxes">{items}</ul>
    )
  }
})
