const chai = require('chai');
const should = chai.should();
const MyMath = require('../lib/my_math.js');

describe('MyMath', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const sum = MyMath.add(14, 15)
      sum.should.eq(29);
    })
  })

  describe('subtract', () => {
    it('subtracts two numbers', () => {
      const difference = MyMath.subtract(20, 14)
      difference.should.eq(6)
    })
  })

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      const product = MyMath.multiply(3, 11)
      product.should.eq(33)
    })
  })

  describe('divide', () => {
    it('divides two numbers', () => {
      const quotient = MyMath.divide(3, 4)
      quotient.should.eq(0.75)
    })
  })
})
