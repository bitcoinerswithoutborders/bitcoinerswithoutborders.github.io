const path = require('path')

const { transpilers } = require('magic-build')

module.exports = {
  TRANSPILERS: {
    HTML: transpilers.PUG,
    CSS: transpilers.STYLUS,
  },
  GIT_BRANCH: 'master',
}
