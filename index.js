require('@wonderbot/format-date')
const colorSource = require('./colors')

module.exports.log = (msg, color) => log(msg, color)
module.exports.warn = msg => log(msg, 'Yellow')
module.exports.error = msg => log(msg, 'Red')
module.exports.debug = msg => log(msg, 'Gray')
module.exports.WBerror = msg =>
    console.log(
        `\x1b[0m[${new Date().format()}]`,
        colorSource.Red,
        '[WB]',
        colorSource.Reset,
        msg
    )
module.exports.success = msg => log(msg, 'Green')
module.exports.WBsuccess = msg =>
    console.log(
        `\x1b[0m[${new Date().format()}]`,
        colorSource.Green,
        '[WB]',
        colorSource.Reset,
        msg + '\x1b[0m'
    )
module.exports.mark = msg => log(msg, 'Blue')

function log(msg, color) {
    console.log(
        `\x1b[0m[${new Date().format()}]`,
        !color || !colorSource[color] ? colorSource.Reset : colorSource[color],
        msg
    )
}