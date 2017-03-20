import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiDom from 'chai-dom'
import MnChipsPageObject from './mn-chips.po.js'

chai
  .use(chaiDom)
  .use(chaiAsPromised)

let pageObject

fixture `mn-chips`
  .page('http://localhost:8080/docs/demo.html')
  .beforeEach(page => {
    pageObject = new MnChipsPageObject(page)
  })

  test('getter value with undefined value', async () => {
    const names = pageObject.get('names')
    await expect(names.value).to.be.eventually.an('array').lengthOf(0)
  })

  test('getter value with defined value', async () => {
    const houses = pageObject.get('houses')
    await expect(houses.value).to.deep.eventually.equal(['test', 'master'])
  })

  test.skip('setter value with a single primitive value', async () => {
    const houses = pageObject.get('houses')
    houses.value = 'lannister'
    await expect(houses.value).to.deep.eventually.equal(['lannister'])
  })

  test.skip('setter value with an array', async () => {
    const houses = pageObject.get('houses')
    houses.value = ['lannister', 'stark']
    await expect(houses.value).to.deep.eventually.equal(['lannister', 'stark'])
  })
