import figaro from '../node_modules/figaro/figaro.json'
import { Selector } from 'testcafe'

fixture `/#/coins`
  .page `${figaro.ROOT}/#/coins`

test('navbar exists test', async t => {
  const nav = Selector('.nav')
  await t
    .expect(nav.exists).ok()
})
