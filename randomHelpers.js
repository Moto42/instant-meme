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

/**Converts_text_with_underscorse_for_spaces_into text with spaces for spaces.
 * 
 * @param {String} str A string with underscores in place of spances.
 * @returns {String} A string with spaces in place of underscores.
 */
exports.underscoresToSpaces = function(str) {
  return str.replace(/_+/g, ' ').replace(/\s\s+/g,' ');
}