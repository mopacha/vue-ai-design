'use strict'
const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('./webpack.pack.conf')
process.env.NODE_ENV = 'production'
webpack(webpackConfig, (err, stats) => {

  console.log(chalk.yellow(
    '  Tip: build success and you can use  npm publish .\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})




