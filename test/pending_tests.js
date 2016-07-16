var expect = require('chai').expect;

describe('Mocha', function(){
  it('Mocha now testing pending tests.', function(){
    expect(true).to.be.true;
  });
});

xdescribe('Pending tests with xdescribe', function(){
  it('This test should be pending.');

  it('This test should also be pending.', function(){
    expect(true).to.be.true;
  });
});

describe('Pending tests without xdescribe', function(){
  it('This test should be pending because it has no function.');

  xit('This test should be pending because it uses xit.', function(){
    expect(true).to.be.true;
  });
});
