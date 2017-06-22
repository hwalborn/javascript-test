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

    const incrementAndCall = () => {
      i++
      validateParens(arr[i])
    }

    const validateParens = (keyOrValue) => {
      let includedInKeys = Object.keys(parens).includes(keyOrValue)
      if((!includedInKeys && vals.length === 0) || (Object.values(parens).includes(keyOrValue) && keyOrValue !== vals[vals.length - 1])) {
        return
      } else if(includedInKeys){
        vals.push(parens[keyOrValue])
        incrementAndCall()
      } else {
        vals.pop()
        incrementAndCall()
      }
    }

    validateParens(arr[i])
    
    return vals.length === 0
  }
};
