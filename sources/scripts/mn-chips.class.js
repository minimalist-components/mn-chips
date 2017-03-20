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

  addChip(value, placeholder) {
    if (value) {
      placeholder = placeholder
        ? `placeholder=${placeholder}`
        : ''

      const option = `<mn-option
        class="natural"
        value="${value}"
        name="${this.name}"
        checked="checked"
        ${placeholder}
      >`
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

  set value(values) {
    values = Array.isArray(values)
      ? values
      : [values]

    this.chips.innerHTML = ''
    values.forEach(value => this.addChip(value))
  }

  get value() {
    const options = this.querySelector('mn-option')
    return options
      ? options.value
      : []
  }
}

window.customElements.define('mn-chips', MnChips)
