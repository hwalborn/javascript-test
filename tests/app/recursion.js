if ( typeof window === 'undefined' ) {
  require('../../app/recursion');
  var expect = require('chai').expect;
  var _ = require('underscore');
}

describe('recursion', function() {
  var fileData = {
    dir: 'app',
    files: [
      'index.html',
      {
        dir: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir: 'vendor',
            files: [
              'jquery.js',
              'underscore.js'
            ]
          }
        ]
      },
      {
        dir: 'css',
        files: [
          'reset.css',
          'main.css'
        ]
      }
    ]
  };

  it('you should be able to return a list of files from the data', function() {
    var result = recursionAnswers.listFiles(fileData);
    expect(result.length).to.eql(8);
    expect(result.indexOf('index.html') > -1).to.be.ok;
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to return a list of files in a subdir', function() {
    var result = recursionAnswers.listFiles(fileData, 'js');
    expect(result.length).to.eql(5);
    expect(result.indexOf('main.js') > -1).to.be.ok;
    expect(result.indexOf('underscore.js') > -1).to.be.ok;
  });

  it('you should be able to find a fibonacci sequence', () => {
    let answers = [0, 3, 34, 377, 4181]
    let nums = [1, 5, 10, 15, 20]
    for(var i = 0; i < nums.length; i++) {
      expect(recursionAnswers.fibonacci(nums[i])).to.eql(answers[i])
    }
  })

  it('you should be able to find a valid parenthesis set', () => {
    expect(recursionAnswers.validParentheses('({[]})')).to.be.ok
    expect(recursionAnswers.validParentheses('([{{()}}])')).to.be.ok
    expect(recursionAnswers.validParentheses('(]')).to.be.not.ok
    expect(recursionAnswers.validParentheses('({[})')).to.be.not.ok
  })
});
