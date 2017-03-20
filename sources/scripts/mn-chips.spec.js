import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiDom from 'chai-dom'
import MnChipsPageObject from './mn-chips.po.js'
import {Selector as querySelector} from 'testcafe'

chai
  .use(chaiDom)
  .use(chaiAsPromised)

let pageObject

fixture `mn-chips`
  .page('http://localhost:8080/docs/demo.html')
  .beforeEach(page => {
    pageObject = new MnChipsPageObject(page)
  })

  test('names.value return an array empty', async page => {
    const names = pageObject.get('names')
    await expect(names.value).to.be.eventually.an('array').lengthOf(0)
  })
