const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    let count = {}
    domains.map(domain => {
            let key = ''
            return domain
                .split('.')
                .reverse()
                .map(el => {
                    key += `.${el}`
                    return !count[key] ? count[key] = 1 : count[key]++
                })
        })
    return count
}

module.exports = {
    getDNSStats
};
