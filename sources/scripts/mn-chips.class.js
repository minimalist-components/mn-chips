class MnChips extends window.MnInput {
  constructor(self) {
    self = super(self)

    return self
  }
}

window.customElements.define('mn-chips', MnChips)
