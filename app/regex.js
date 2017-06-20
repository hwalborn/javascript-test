exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return !!str.match(/\d+/g)
  },

  containsRepeatingLetter: function(str) {
    return (/([a-zA-Z]).*?\1/).test(str)
  },

  endsWithVowel: function(str) {
    return (/[aeiou]$/i).test(str)
  },

  captureThreeNumbers: function(str) {
    let nums = str.match(/\d{3}/)
    return nums ? nums[0] : false
  },

  matchesPattern: function(str) {
    return (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/).test(str)
  },

  isUSD: function(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str)
  }
};
