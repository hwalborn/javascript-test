exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((acc, val) => {
      return acc += val
    }, 0)
  },

  remove: function(arr, item) {
    return arr.filter((elm) => elm !== item)
  },

  removeWithoutCopy: function(arr, item) {
    for(var i = arr.length - 1; i >= 0; i--) {
      if(arr[i] === item) {
        arr.splice(i, 1)
      }
    }
    return arr
  },

  append: function(arr, item) {
    return [...arr, item]
  },

  truncate: function(arr) {
    arr.pop()
    return arr
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail: function(arr) {
    arr.shift()
    return arr
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count: function(arr, item) {
    return arr.reduce((acc, val) => {
      if(val === item) {
        return acc += 1
      } else {
        return acc
      }
    }, 0)
  },

  duplicates: function(arr) {
    let duplicateArr = []
    let placeHolder = null

    arr.sort().forEach((elm) => {
      if(!!placeHolder && placeHolder === elm && !duplicateArr.includes(elm)){
        duplicateArr.push(elm)
      }
      placeHolder = elm
    })

    return duplicateArr
  },

  square: function(arr) {
    return arr.map((elm) => Math.pow(elm, 2))
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((acc, elm, index) => {
      return elm === target ? [...acc, index] : acc
    }, [])
  }
};
