require('./pull.css')

var React = require('react')

module.exports = React.createClass({
  propTypes: {
    direction: React.PropTypes.string
  },

  render: function () {
    var className = this.props.direction === 'right' ?
      'pull-right' : 'pull-left'

    return (
      <span className={className}>
        {this.props.children}
      </span>
    )
  }
})
