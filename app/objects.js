exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj)
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate: function(obj) {
    let iterate = []
    Object.keys(obj).forEach((key) => {
      iterate.push(`${key}: ${obj[key]}`)
    })
    return iterate
  }
};
