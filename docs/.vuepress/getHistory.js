var cmp = require('semver-compare');

var getChildren = require('./getChildren')


function getHistory(parent, dir) {
    const entries = getChildren(parent, dir)

    const sorted = entries.sort(cmp).reverse()
    console.log(sorted)
    return sorted
}

module.exports = getHistory