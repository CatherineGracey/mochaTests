var expect = require('chai').expect;
var tests = require('../thingsToTest.js');

describe('Mocha', function(){
  it('Mocha now testing passing tests.', function(){
    expect(true).to.be.true;
  });
  it('thingsToTest.js has loaded', function(){
    expect(tests).to.be.ok;
  });
});
