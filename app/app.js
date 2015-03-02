require("./app.css")

var Backbone = require('backbone')
var Router = require('./router')

new Router()
Backbone.history.start({pushState: false, root: "/"})
