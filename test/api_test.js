const chai = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const figaroJSONPath = './node_modules/figaro/figaro.json'
require('figaro').parse(figaroJSONPath, () => {})
chai.use(chaiHTTP)

describe("API", () => {
  describe("GET pair rate", () => {
    it('returns pair title & current pair rate', () => {
      return chai.request(process.env.ROOT)
      .get("/rate/btc_ltc")
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('object')

        response.body.pair.should.be.a('string')
        isNaN(parseInt(response.body.pair)).should.eq(true)
        response.body.rate.should.be.a('string')
        parseInt(response.body.rate).should.be.a('number')
      })
      .catch((error) => {
        throw error
      })
    })
  })
})
