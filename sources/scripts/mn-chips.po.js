import {Selector as querySelector} from 'testcafe'

module.exports = PageObject

function PageObject() {
  return {
    get,
  }

  function get(name) {
    const option = querySelector(`mn-chips[name="${name}"]`)
    return option
  }
}
