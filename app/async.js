exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((res, rej) => {
      res(value)
    })
  },

  manipulateRemoteData: function(url) {
    return new Promise((res, rej) => {
      res(['Adam', 'Alex', 'Matt', 'Paul', 'Rebecca'])
    })
  }
};
