var Backbone = require('backbone')

var router = new Backbone.Router()

router.route('', 'index')
  .route('box/:id', 'mailbox')

router.on('route:index', require('./routes/Index'))
router.on('route:mailbox', require('./routes/Mailbox'))

module.exports = router
