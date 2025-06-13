import './style.scss';

class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.resultDisplayed = false;
    this.decimalUsed = false;
    this.addListeners();
    this.addKeyboardSupport();
  }

  clear() {
    this.displayElement.value = '';
    this.decimalUsed = false;
  }

  delete() {
    const lastChar = this.displayElement.value.slice(-1);
    this.displayElement.value = this.displayElement.value.slice(0, -1);
    if (lastChar === '.') this.decimalUsed = false;
  }

  append(value) {
    if (value === '.' && this.decimalUsed) return;
    if (value === '.') this.decimalUsed = true;
    if (this.resultDisplayed) {
      this.displayElement.value = value;
      this.resultDisplayed = false;
    } else {
      this.displayElement.value += value;
    }
  }

  calculate() {
    try {
      this.displayElement.value = eval(this.displayElement.value);
      this.resultDisplayed = true;
    } catch {
      this.displayElement.value = 'Error';
    }
  }

  handleKey(key) {
    const map = {
      '/': '/',
      '*': '*',
      '-': '-',
      '+': '+',
      '.': '.',
    };

    if (!isNaN(key)) {
      this.append(key);
    } else if (key in map) {
      this.append(map[key]);
    } else if (key === 'Enter') {
      this.calculate();
    } else if (key === 'Backspace') {
      this.delete();
    } else if (key === 'Escape') {
      this.clear();
    }
  }

  addListeners() {
    document.querySelectorAll('[data-value]').forEach(btn => {
      btn.addEventListener('click', () => this.append(btn.dataset.value));
    });

    document.querySelector('[data-clear]').addEventListener('click', () => this.clear());
    document.querySelector('[data-delete]').addEventListener('click', () => this.delete());
    document.querySelector('[data-equals]').addEventListener('click', () => this.calculate());
  }

  addKeyboardSupport() {
    document.addEventListener('keydown', e => this.handleKey(e.key));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('resultado');
  new Calculator(display);
});