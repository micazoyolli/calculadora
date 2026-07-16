export default class Calculator {
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
      this.displayElement.value = this.evaluate(this.displayElement.value);
      this.resultDisplayed = true;
    } catch {
      this.displayElement.value = 'Error';
    }
  }

  evaluate(expression) {
    const tokens = expression.match(/\d+(?:\.\d+)?|[+\-*/]/g);
    if (!tokens || tokens.join('') !== expression) {
      throw new Error('Invalid expression');
    }

    const values = [];
    const operators = [];
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
    const applyOperator = () => {
      const operator = operators.pop();
      const right = values.pop();
      const left = values.pop();

      if (left === undefined || right === undefined || operator === undefined) {
        throw new Error('Invalid expression');
      }

      if (operator === '+') values.push(left + right);
      if (operator === '-') values.push(left - right);
      if (operator === '*') values.push(left * right);
      if (operator === '/') values.push(left / right);
    };

    tokens.forEach((token, index) => {
      if (!Number.isNaN(Number(token))) {
        values.push(Number(token));
        return;
      }

      if (index === 0 || index === tokens.length - 1 || Number.isNaN(Number(tokens[index - 1]))) {
        throw new Error('Invalid operator');
      }

      while (
        operators.length > 0
        && precedence[operators[operators.length - 1]] >= precedence[token]
      ) {
        applyOperator();
      }

      operators.push(token);
    });

    while (operators.length > 0) {
      applyOperator();
    }

    if (values.length !== 1 || !Number.isFinite(values[0])) {
      throw new Error('Invalid result');
    }

    return String(values[0]);
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
