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

  },

  validParentheses: function(n) {

  }
};
