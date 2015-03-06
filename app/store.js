var _store = {}

module.exports = {
  set: function (name, collection) {
    _store[name] = collection
  },

  get: function (name) {
    return _store[name]
  }
}
