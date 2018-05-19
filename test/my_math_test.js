const chai = require('chai');
const should = chai.should();
const MyMath = require('../lib/my_math.js');

describe('MyMath', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const sum = MyMath.add(14, 15);
      sum.should.eq(29);
    });

    it('subtracts two numbers', () => {
      const difference = MyMath.subtract(20, 14);
      difference.should.eq(6);
    })
  });
});
