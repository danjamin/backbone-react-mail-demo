require('./mailboxes.css')

var React = require('react')
var router = require('../router')

require('react.backbone') // self binding

var Mailbox = require('./Mailbox.react')

module.exports = React.createBackboneClass({
  displayName: 'Mailboxes',

  handleClick: function (id) {
    console.log(router, id)
  },

  render: function () {
    var items = this.getCollection().map(function (mailbox) {
      return (
        <Mailbox key={mailbox.get('id')}
          handleClick={this.handleClick}
          model={mailbox} />
      )
    }.bind(this))

    return (
      <ul className="mailboxes">{items}</ul>
    )
  }
})
