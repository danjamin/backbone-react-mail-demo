require("./styles/app.css")

var React = require('react')
var router = require('./router')
var AppLayout = require('./views/layouts/App.react')
var Mailboxes = require('./collections/Mailboxes')

router.start()

var mailboxes = new Mailboxes()
mailboxes.fetch()

React.render(
  <AppLayout mailboxes={mailboxes}>
  </AppLayout>,
  document.getElementById('main')
)
