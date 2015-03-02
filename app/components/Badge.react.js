require('./badge.css')

var React = require('react')

module.exports = React.createClass({
  displayName: 'Badge',

  propTypes: {
    count: React.PropTypes.number
  },

  render: function () {
    return (
      <span className='badge'>{this.props.count}</span>
    )
  }
})
