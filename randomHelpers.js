/**
 * Random helper functions so I can export and test them easily.
 */

 /**
 * 
 * @param {String} str String suspected of ending in .png
 * @returns {String} String that deffinantly does not end in .png
 */
exports.stripPNG = function (str=""){
  if(!str) return '';
  if(typeof str !== 'string') str =  str.toString()
  return (str.slice(-4) === '.png' ? str.slice(0, -4) : str);
}