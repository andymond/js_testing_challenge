const chai = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const figaroJSONPath = './node_modules/figaro/figaro.json'
require('figaro').parse(figaroJSONPath, () => {})
chai.use(chaiHTTP)

describe('API', () => {
  describe('GET pair rate', () => {
    it('returns pair title & current pair rate', () => {
      return chai.request(process.env.ROOT)
      .get('/rate/btc_ltc')
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('object')

        let pair = response.body.pair
        pair.should.be.a('string')
        isNaN(parseInt(pair)).should.eq(true)

        let rate = response.body.rate
        rate.should.be.a('string')
        parseInt(rate).should.be.a('number')
      })
      .catch((error) => {
        throw error
      })
    })

    it('returns error with invalid pair', () => {
      return chai.request(process.env.ROOT)
      .get('/rate/btc_lt')
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('object')

        let error = response.body.error
        error.should.eq('Pair btc_lt is currently unavailable.')
      })
      .catch((error) => {
        throw error
      })
    })

    it('returns 500 for random words', () => {
      return chai.request(process.env.ROOT)
      .get('/rate/pumpkins')
      .then((response) => {
        response.should.have.status(500)
        response.body.should.be.an('object')

        let message = response.body.message
        message.should.eq("errorMessage is not defined")
      })
    })
  })

  describe('GET get coins', () => {
    it('returns list of supported currencies', () => {
      return chai.request(process.env.ROOT)
      .get('/getcoins')
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('object')

        let btc = response.body.BTC
        btc.should.be.an('object')
        btc.should.include.keys('name', 'symbol', 'image', 'imageSmall', 'status', 'minerFee')
        parseInt(btc.minerFee).should.be.a('number')
      })
      .catch((error) => {
        throw error
      })
    })
  })

  describe('GET recent transactions', () => {
    it('defaults to a list of 5 transactions', () => {
      return chai.request(process.env.ROOT)
      .get('/recenttx')
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('array')
        response.body.length.should.eq(5)
      })
    })

    it('returns list of 2 transactions', () => {
      return chai.request(process.env.ROOT)
      .get('/recenttx/2')
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('array')
        response.body.length.should.eq(2)
      })
    })

    it('returns list of 11 transactions', () => {
      return chai.request(process.env.ROOT)
      .get('/recenttx/11')
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('array')
        response.body.length.should.eq(11)
      })
    })

    it('returns transactions with correct attrs', () => {
      return chai.request(process.env.ROOT)
      .get('/recenttx/1')
      .then((response) => {
        response.should.have.status(200)
        response.body.should.be.an('array')

        let tx = response.body[0]
        tx.should.include.keys('curIn', 'curOut', 'timestamp', 'amount', 'txid')
        parseInt(tx.timestamp).should.be.a('number')
        parseInt(tx.amount).should.be.a('number')
        parseInt(tx.amound).should.be.a('number')
      })
    })
  })
})
