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

describe('Tests that pass.', function(){
  it("True is true.", function(){
    expect(true).to.be.true;
  });
  it("True is truthy.", function(){
    expect(true).to.be.ok;
  });
  it("Strings match strings.", function(){
    var output = tests.returnSelf("Test string.");
    expect(output).to.equal("Test string.");
  });
  it("Numbers match numbers.", function(){
    var output = tests.returnSelf(10);
    expect(output).to.equal(10);
  });
});
