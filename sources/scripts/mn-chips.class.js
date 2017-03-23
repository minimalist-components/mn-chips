class MnChips extends window.MnInput {
  constructor(self) {
    self = super(self)
    this.classList.add('mn-chips')
    this.input = this.querySelector('input')
    this.name = this.getAttribute('name')
    this.setAddEvents()

    this.setValue()

    return self
  }

  addChip(value, placeholder) {
    const valueAlreadyUsed = this.value.indexOf(value) > -1
    const validateChip = typeof this.validateChip === 'function'
      ? this.validateChip(value)
      : true
    if (value && !valueAlreadyUsed && validateChip) {
      placeholder = placeholder
        ? `placeholder=${placeholder}`
        : ''

      const option = `<mn-option
        class="natural"
        value="${value}"
        name="${this.name}"
        ${placeholder}
      >`
      this.chips.insertAdjacentHTML('beforeend', option)
      const lastOption = this.chips.querySelector('mn-option:last-child')
      setTimeout(() => {
        lastOption.checked = true
      }, 0)
      this.input.value = ''
      this.dispatchChangeEvent()
    }
  }

  setValue() {
    this.chips = document.createElement('div')
    this.chips.classList.add('values')
    this.appendChild(this.chips)

    const options = Array.from(this.querySelectorAll('option'))
    options.forEach(option => {
      this.removeChild(option)
      this.addChip(option.value, option.textContent)
    })

    this.dispatchChangeEvent()
  }

  setAddEvents() {
    this.input.addEventListener('blur', () => {
      this.addChip(this.input.value)
      this.classList.remove('has-value')
      this.input.value = ''
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

  dispatchChangeEvent() {
    const event = new Event('change')
    this.dispatchEvent(event)
  }

  set value(values) {
    const valueAlreadyUsed = this.value.indexOf(values) > -1

    if (values && !valueAlreadyUsed) {
      values = Array.isArray(values)
        ? values
        : [values]

      this.chips.innerHTML = ''
      values.forEach(value => this.addChip(value))
    } else {
      this.input.value = ''
    }
  }

  get value() {
    const options = this.querySelector('mn-option')
    return options
      ? options.value
      : []
  }
}

window.customElements.define('mn-chips', MnChips)
