var React = require('react')

require('react.backbone') // self binding

// var Message = require('./Message.react')

module.exports = React.createBackboneClass({
  displayName: 'Messages',

  render: function () {
    var items = this.getCollection().map(function (message) {
      return (
        <li key={message.get('id')}>{message.get('from')}</li>
      )
    })

    return (
      <ul className="messages">{items}</ul>
    )
  }
})
