import figaro from '../node_modules/figaro/figaro.json'
import { Selector, ClientFunction } from 'testcafe'

fixture `/#/coins`
  .page `${figaro.ROOT}/#/coins`

test('navbar exists test', async t => {
  const nav = Selector('.nav')

  await t.expect(nav.exists).ok()
})

test('about link test', async t => {
  const about = Selector('.nav > li > a').nth(0)
  const getLocation = ClientFunction(() => document.location.href);

  await t.click(about)
  await t.expect(getLocation()).contains('/about')
})

test('api link test', async t => {
  const apiAndTools = Selector('.nav > li > a').nth(1)
  const getLocation = ClientFunction(() => document.location.href);

  await t
    .click(apiAndTools)
    .click(Selector('.dropdown-menu > li > a').nth(0))
  await t.expect(getLocation()).contains('/api')
})
