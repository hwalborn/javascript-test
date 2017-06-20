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
        func(data)
      }
    }

    const func = (data) => {
      data.files.forEach((file) => {
        if(typeof file === 'string') {
          foundFiles.push(file)
        } else {
          func(file)
        }
      })
    }

    if(!!dirName) {
      findWithDirectory(data, dirName)
    } else {
      func(data)
    }
    return foundFiles
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
