import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiDom from 'chai-dom'
import MnChipsPageObject from './mn-chips.po.js'

chai
  .use(chaiDom)
  .use(chaiAsPromised)

let chips

fixture `chips`
  .page('http://localhost:8080/docs/demo.html')
  .beforeEach(page => {
    chips = new MnChipsPageObject(page)
  })

  test('test', () => {
    console.log(chips)
    expect(true).to.be.true
  })
