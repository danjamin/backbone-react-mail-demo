require('../styles/messages.css')

var React = require('react')
var BackboneMixin = require('../mixins/BackboneMixin')

var Message = React.createClass({
  displayName: 'Message',

  propTypes: {
    message: React.PropTypes.object // backbone model
  },

  render: function () {
    var message = this.props.message

    return (
      <tr>
        <td>{message.get('from')}</td>
        <td>{message.get('to')}</td>
        <td>{message.get('subject')}</td>
      </tr>
    )
  }
})

module.exports = React.createClass({
  displayName: 'Messages',

  mixins: [BackboneMixin],

  getBackboneCollections: function () {
    return [this.props.messages]
  },

  propTypes: {
    // messages: React.PropTypes.array // backbone collection
  },

  render: function () {
    var rows = this.props.messages.map(function (message) {
      return (
        <Message key={message.get('id')} message={message} />
      )
    })

    if (rows.length === 0) {
      return (
        <span>
          No messages found
        </span>
      )
    } else {
      return (
        <table className="messages">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      )
    }
  }
})
