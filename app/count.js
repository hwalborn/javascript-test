exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {

  count: function(start, end) {

    let i = start
    console.log(i)
    let counting = setInterval(() => {
      if (i === end)
        return clearInterval(counting)
      i++
      console.log(i)
    }, 100)

    return {
      cancel: () => {
        clearInterval(counting)
      }
    }
  }
};
