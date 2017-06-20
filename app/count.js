exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    let i = 0
    let counting = setInterval(() => {
      
      console.log(start + i)
      if(i === end) {
        clearInterval(counting)
      }
      i++
    }, 100)
    return {
      cancel: () => {
        clearInterval(counting)
      }
    }
  }
};
