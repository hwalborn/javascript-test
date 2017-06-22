
exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let regex = new RegExp("(.)(?=\\1{" + amount + "})","g")
    return str.replace(regex, '')
  },

  wordWrap: function(str, cols) {
    let words = str.split(' ')
    let unWrap = []
    let wrap = []
    words.forEach((word, index) => {
      if(word.length >= cols || (index !== words.length - 1 && word.length + words[index + 1].length >= cols)){
        wrap.push(word)
      } else if(index === words.length - 1){
        wrap.push(word)
      } else (
        unWrap.push(word)
      )
    })
    if(unWrap.length === 0) {
      return [...unWrap.join(' '), ...wrap.join('\n')].join('')
    } else {
      return [unWrap.join(' '), wrap.join('\n')].join('\n')
    }
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
