require('babel-register')({
  // gotta do this here as babelrc affects both browser and server
  presets: [
    'node6',
  ],
})
require('./server')
