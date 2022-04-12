const withTM = require('next-transpile-modules')([
  '@link-u/ginzan',
  '@link-u/react_imagedownloader',
  'promise-polyfill'
])

module.exports = withTM({
  reactStrictMode: true,
})