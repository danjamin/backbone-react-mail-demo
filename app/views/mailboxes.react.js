require('./mailboxes.css')

var React = require('react')

require('react.backbone') // self binding

var Mailbox = require('./mailbox.react')

module.exports = React.createBackboneClass({
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
