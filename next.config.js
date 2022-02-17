const withTM = require('next-transpile-modules')([
  '@link-u/ginzan',
  'promise-polyfill'
])

module.exports = withTM({
  reactStrictMode: true,
})