const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str= 'null', options) {
  let tempStr = str
  let { repeatTimes, separator , addition, additionRepeatTimes, additionSeparator } = options

  if (typeof addition === 'boolean') addition = addition + ''

  let additionStr = new Array(additionRepeatTimes > 1 ? additionRepeatTimes : 1)
      .fill(addition === null ? 'null' : addition)
      .join(additionSeparator ? additionSeparator : '|')

  return resStr = new Array(repeatTimes > 1 ? repeatTimes : 1)
      .fill(tempStr + additionStr)
      .join(separator ? separator : '+')
}

module.exports = {
  repeater
};
