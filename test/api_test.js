const chai = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const figaroJSONPath = './node_modules/figaro/figaro.json'
require('figaro').parse(figaroJSONPath, () => {})
chai.use(chaiHTTP)
