require('./mailboxes.css')

var React = require('react')

require('react.backbone') // self binding

var Badge = require('../components/badge.react')
var Pull = require('../components/pull.react')

module.exports = React.createBackboneClass({
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
