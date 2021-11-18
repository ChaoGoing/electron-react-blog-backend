const baseConf = require('./.eslintrc.js')

module.exports = {
  ...baseConf,
  parserOptions: {
    project: './src/main/tsconfig.json'
  }
}
