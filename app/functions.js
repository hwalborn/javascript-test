exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    const greeting = (str2) => {
      return `${str}, ${str2}`
    }
    return greeting
  },

  makeClosures: function(arr, fn) {
    return arr.map((num) =>  {
      return fn.bind(null, num)
    })
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2)
  },

  useArguments: function() {
    return Array.prototype.reduce.call(arguments, (acc, num) => {
      return typeof num === "number" ? acc += num : acc
    }, 0)
  },

  callIt: function(fn) {
    let args = Array.prototype.filter.call(arguments, (arg) => typeof arg === 'number')
    return fn(...args)
  },

  partialUsingArguments: function(fn) {
    if(arguments.length === 1){
      return fn
    } else {
      let args = Array.prototype.filter.call(arguments, (arg) => typeof arg === 'number')
      return fn.bind(null, ...args)
    }
  },

  curryIt: function(fn) {
    // if(arguments.length === 1){
    //   return fn.bind(null, )
    // } else {
    //   debugger
      let args = Array.prototype.filter.call(arguments, (arg) => typeof arg === 'number')
      return fn.bind(null, ...args)
    // }
  }
};
