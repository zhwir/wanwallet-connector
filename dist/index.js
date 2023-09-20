
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./wanwallet-connector.cjs.production.min.js')
} else {
  module.exports = require('./wanwallet-connector.cjs.development.js')
}
