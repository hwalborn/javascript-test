exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    const foundFiles = [];

    const findWithDirectory = (data, subDir) => {
      // Until there's the right subdirectory, go one step deeper
      if(!!subDir && data.dir !== subDir){
          data.files.forEach((file) => {
            if (typeof file === 'object'){
              findWithDirectory(file, subDir)
          }
        })
      } else {
        findFiles(data)
      }
    }

    const findFiles = (data) => {
      data.files.forEach((file) => {
        if(typeof file === 'string') {
          foundFiles.push(file)
        } else {
          findFiles(file)
        }
      })
    // function recur(data, seeking=false, arr=[]) {
    //   if (Array.isArray(data)) {
    //     return data.forEach(item => recur(item, seeking, arr))
    //   } else if (typeof data === 'object') {
    //     if (data.dir === seeking)
    //       seeking = false
    //     return recur(data.files, seeking, arr) || arr
    //   } else if (!seeking) {
    //     arr.push(data)
    //   }
    // }

    // function recurAnno(data, seeking=false, arr=[]) {
    //   if (Array.isArray(data)) { // if we are examining a directory's items
    //     data.forEach(item => recur(item, seeking, arr)) // examine each item
    //   } else if (typeof data === 'object') { // if we are examining a directory's meta data
    //     if (data.dir === seeking) // if these are the droids we are looking for...
    //       seeking = false // ...turn on our 'capture all files' mode
    //     return recur(data.files, seeking, arr) || arr // this || is because our recursion on files returns undefined. could always return arr.concat(data) on our file recursion, but that is sloppy dop expensive
    //   } else if (!seeking) { // otherwise we are examining a file (string)
    //     arr.push(data) // add it to our arr if we are capturing
    //   }
    // }
    }

    if(!!dirName) {
      findWithDirectory(data, dirName)
    } else {
      findFiles(data)
    }

    return foundFiles
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    let fibs = []
    const fib = (num, prev) => {
      fibs.push(num)
      if(fibs.indexOf(num) === n - 1) {
        return
      } else {
        fib(num + prev, num)
      }
    }
    fib(0, 1)
    return fibs[fibs.length - 1]
  },

  validParentheses: function(n) {
    let parens = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

    let arr = n.split('')
    let i = 0
    const vals = []

    const validateParens = (keyOrValue) => {
      let includedInKeys = Object.keys(parens).includes(keyOrValue)
      if((!includedInKeys && vals.length === 0) || (Object.values(parens).includes(keyOrValue) && keyOrValue !== vals[vals.length - 1])) {
        return
      } else if(includedInKeys){
        i++
        vals.push(parens[keyOrValue])
        validateParens(arr[i])
      } else {
        i++
        vals.pop()
        validateParens(arr[i])
      }
    }

    validateParens(arr[i])
    return vals.length === 0
  }
};
