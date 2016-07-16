var expect = require('chai').expect;
var tests = require('../thingsToTest.js');

describe('Mocha', function(){
  it('Mocha now testing failing tests.', function(){
    expect(true).to.be.true;
  });
  it('thingsToTest.js has loaded', function(){
    expect(tests).to.be.ok;
  });
});

describe('Tests that fail.', function(){
  it("True is false.", function(){
    expect(true).to.be.false;
  });
  it("Strings don't match numbers.", function(){
    var output = tests.returnSelf(10);
    expect(output).to.equal("Test string.");
  });
  it("Numbers don't match strings.", function(){
    var output = tests.returnSelf("Test string.");
    expect(output).to.equal(10);
  });
});
