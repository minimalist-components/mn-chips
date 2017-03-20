class MnChips extends window.MnInput {
  constructor(self) {
    self = super(self)
    this.input = this.querySelector('input')
    this.name = this.getAttribute('name')
    this.setAddEvents()

    this.chips = document.createElement('div')
    this.chips.classList.add('values')
    this.appendChild(this.chips)

    return self
  }

  addChip(value) {
    if (value) {
      const option = `<mn-option class="natural" value="${value}" name="${this.name}" checked="checked">`
      this.chips.insertAdjacentHTML('beforeend', option)
      this.input.value = ''
    }
  }

  setAddEvents() {
    this.input.addEventListener('blur', () => {
      this.addChip(this.input.value)
      this.classList.remove('has-value')
    })

    this.input.addEventListener('keydown', event => {
      const enterKeys = [
        'Enter',
        ',',
        ' ',
      ]

      const isEnterKey = enterKeys.indexOf(event.key) > -1

      if (isEnterKey) {
        this.addChip(this.input.value)
        event.preventDefault()
      }
    })
  }
}

window.customElements.define('mn-chips', MnChips)
