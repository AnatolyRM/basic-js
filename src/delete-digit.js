const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let tempArr = []
    for (let i = 0; i < [...String(n)].length; i++) {
        tempArr.push([...String(n)]
            .filter((_, ind) => ind !== i)
            .reduce((ak, i) => Number(ak + i)))
    }
    return Math.max(...tempArr)
}

module.exports = {
    deleteDigit
};
