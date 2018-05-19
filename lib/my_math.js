module.exports = class MyMath {
  static add(a, b) {
    this.validate(a, b)
    return a + b
  }

  static subtract(a, b) {
    this.validate(a, b)
    return a - b
  }

  static multiply(a, b) {
    this.validate(a, b)
    return a * b
  }

  static divide(a, b) {
    this.validate(a, b)
    return a / b
  }

  static validate(a, b) {
    if(isNaN(a) || isNaN(b)) {
      throw new Error("Param is not a number!")
    }
  }
}
