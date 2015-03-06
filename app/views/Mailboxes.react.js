require('../styles/mailboxes.css')

var React = require('react')
var BackboneMixin = require('../mixins/BackboneMixin')
var router = require('../router').router

var Badge = require('../components/Badge.react')
var Pull = require('../components/Pull.react')

var Mailbox = React.createClass({
  displayName: 'Mailbox',

  propTypes: {
    mailbox: React.PropTypes.object, // backbone model
    handleClick: React.PropTypes.func
  },

  handleClick: function (e) {
    var mailbox = this.props.mailbox
    this.props.handleClick(mailbox.get('id'))
  },

  render: function () {
    var mailbox = this.props.mailbox

    return (
      <li onClick={this.handleClick}>
        <Pull direction="right">
          <Badge count={mailbox.get('count')} />
        </Pull>

        {mailbox.get('name')}
      </li>
    )
  }
})

module.exports = React.createClass({
  displayName: 'Mailboxes',

  mixins: [BackboneMixin],

  getBackboneCollections: function () {
    return [this.props.mailboxes]
  },

  propTypes: {
    // mailboxes: React.PropTypes.array // backbone collection
  },

  handleClick: function (id) {
    router.navigate('box/' + id, {trigger: true})
  },

  render: function () {
    var items = this.props.mailboxes.map(function (mailbox) {
      return (
        <Mailbox key={mailbox.get('id')}
          handleClick={this.handleClick}
          mailbox={mailbox} />
      )
    }.bind(this))

    return (
      <ul className="mailboxes">{items}</ul>
    )
  }
})
