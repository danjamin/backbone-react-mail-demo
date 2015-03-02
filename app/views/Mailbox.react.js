require('./mailboxes.css')

var React = require('react')

require('react.backbone') // self binding

var Badge = require('../components/Badge.react')
var Pull = require('../components/Pull.react')

module.exports = React.createBackboneClass({
  displayName: 'Mailbox',

  render: function () {
    var model = this.getModel()

    return (
      <li>
        <Pull direction="right">
          <Badge count={model.get('count')} />
        </Pull>

        {model.get('name')}
      </li>
    )
  }
})
