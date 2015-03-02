var React = require('react')

require('react.backbone') // self binding

module.exports = React.createBackboneClass({
  render: function () {
    return (
      <div>
        Um, this is awkward ... select a mailbox
      </div>
    )
  }
})
