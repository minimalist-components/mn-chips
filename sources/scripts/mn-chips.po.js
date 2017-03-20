import {Selector as querySelector} from 'testcafe'

module.exports = PageObject

function PageObject() {
  const chips = querySelector('mn-chips')

  return {
    chips,
  }
}
