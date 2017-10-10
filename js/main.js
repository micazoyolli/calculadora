// Properties
var p = {
  action: null,
  decimalAmount: false,
  digit: null,
  keys: document.querySelectorAll('#calculator ul li'),
  numberSigns: 0,
  operations: document.querySelector('#operations'),
  result: false
};

// Methods
var m = {
  calculator: function(action, digit) { // Operations

    switch (action) {
      case 'decimal':
        if (!p.decimalAmount && p.numberSign != 1) {
          p.operations.innerHTML += digit;
          p.decimalAmount = true;
          p.result = false;
        }

        break;
      case 'equal':
        p.operations.innerHTML = eval(p.operations.innerHTML);

        // Evaluate with regular expression if in the result already exists a decimal
        var expression = /./g;

        if (!expression.test(p.operation.innerHTML)) {
          p.decimalAmount = true;
        }

        p.result = true;

        break;
      case 'number':
        p.numberSigns = 0;

        if (p.operations.innerHTML == '0') {
          p.operations.innerHTML = digit;
        } else {
          if (p.result) {
            p.result = false;
            p.operations.innerHTML = digit;
          } else {
            p.operations.innerHTML += digit;
          }
        }

        break;
      case 'symbol':
        p.numberSigns++;

        if (p.numberSigns == '1') {
          if (p.operations.innerHTML == '0') {
            p.operations.innerHTML = 0;
          } else {
            p.operations.innerHTML += digit;
            p.decimalAmount = false;
            p.result = false;
          }
        }

        break;
    }
  },

  deleteCalculator: function() { // Delete memory
    p.result = false;
    p.operations.innerHTML = 0;
  },

  init: function() { // Init function
    for (var i = 0; i < p.keys.length; i++) {
      p.keys[i].addEventListener('click', m.selectKey);
    }

    document.addEventListener('keydown', m.pressKey);
  },

  pressKey: function(key) { // Press keyboard
    if (key.keyCode == 48 || key.keyCode == 96) {
      p.action = 'number';
      p.digit = 0;
    } else if (key.keyCode == 49 || key.keyCode == 97) {
      p.action = 'number';
      p.digit = 1;
    } else if (key.keyCode == 50 || key.keyCode == 98) {
      p.action = 'number';
      p.digit = 2;
    } else if (key.keyCode == 51 || key.keyCode == 99) {
      p.action = 'number';
      p.digit = 3;
    } else if (key.keyCode == 52 || key.keyCode == 100) {
      p.action = 'number';
      p.digit = 4;
    } else if (key.keyCode == 53 || key.keyCode == 101) {
      p.action = 'number';
      p.digit = 5;
    } else if (key.keyCode == 54 || key.keyCode == 102) {
      p.action = 'number';
      p.digit = 6;
    } else if (key.keyCode == 55 || key.keyCode == 103) {
      p.action = 'number';
      p.digit = 7;
    } else if (key.keyCode == 56 || key.keyCode == 104) {
      p.action = 'number';
      p.digit = 8;
    } else if (key.keyCode == 57 || key.keyCode == 105) {
      p.action = 'number';
      p.digit = 9;
    } else if (key.keyCode == 187 || key.keyCode == 107) {
      p.action = 'symbol';
      p.digit = '+';
    } else if (key.keyCode == 189 || key.keyCode == 109) {
      p.action = 'symbol';
      p.digit = '-';
    } else if (key.keyCode == 88 || key.keyCode == 106) {
      p.action = 'symbol';
      p.digit = '*';
    } else if (key.keyCode == 111) {
      p.action = 'symbol';
      p.digit = '/';
    } else if (key.keyCode == 190 || key.keyCode == 110) {
      p.action = 'decimal';
      p.digit = '.';
    } else if (key.keyCode == 13) {
      p.action = 'equal';
    } else if (key.keyCode == 8) {
      p.action = '';
      m.deleteCalculator();
    } else {
      p.action = '';
      p.digit = '';
    }

    m.calculator(p.action, p.digit);
  },

  selectKey: function(key) { // Select in screen
    p.action = key.target.getAttribute('class');
    p.digit = key.target.innerHTML;

    m.calculator(p.action, p.digit);
  }
};

m.init();
