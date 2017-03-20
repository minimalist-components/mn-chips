import {Selector as querySelector} from 'testcafe'

module.exports = PageObject

function PageObject(page) {
  return {
    get,
  }

  function get(name) {
    const option = querySelector(`mn-chips[name="${name}"]`)
    return option
  }
}
