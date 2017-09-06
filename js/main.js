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
  calculator: function(action, digit) {

    switch (action) {
      case 'decimal':
        if (!p.decimalAmount) {
          p.operations.innerHTML += digit;
          p.decimalAmount = true;
          p.result = false;
        }

        break;
      case 'equal':
        p.operations.innerHTML = eval(p.operations.innerHTML);
        p.result = true;

        break;
      case 'number':
        p.numberSigns = 0;

        if (p.operations.innerHTML == 0) {
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

        if (p.numberSigns == 1) {
          if (p.operations.innerHTML == 0) {
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

  deleteCalculator: function() {
    p.operations.innerHTML = 0;
  },

  init: function() {
    for (var i = 0; i < p.keys.length; i++) {
      p.keys[i].addEventListener('click', m.selectKey);
    }

    document.addEventListener('keydown', m.pressKey);
  },

  pressKey: function(key) {
    if (key.keyCode == 48 || key.keyCode == 96) {
      p.action = 'number';
      p.digit = 0;
    }

    if (key.keyCode == 49 || key.keyCode == 97) {
      p.action = 'number';
      p.digit = 1;
    }

    if (key.keyCode == 50 || key.keyCode == 98) {
      p.action = 'number';
      p.digit = 2;
    }

    if (key.keyCode == 51 || key.keyCode == 99) {
      p.action = 'number';
      p.digit = 3;
    }

    if (key.keyCode == 52 || key.keyCode == 100) {
      p.action = 'number';
      p.digit = 4;
    }

    if (key.keyCode == 53 || key.keyCode == 101) {
      p.action = 'number';
      p.digit = 5;
    }

    if (key.keyCode == 54 || key.keyCode == 102) {
      p.action = 'number';
      p.digit = 6;
    }

    if (key.keyCode == 55 || key.keyCode == 103) {
      p.action = 'number';
      p.digit = 7;
    }

    if (key.keyCode == 56 || key.keyCode == 104) {
      p.action = 'number';
      p.digit = 8;
    }

    if (key.keyCode == 57 || key.keyCode == 105) {
      p.action = 'number';
      p.digit = 9;
    }

    if (key.keyCode == 187 || key.keyCode == 107) {
      p.action = 'symbol';
      p.digit = '+';
    }

    if (key.keyCode == 189 || key.keyCode == 109) {
      p.action = 'symbol';
      p.digit = '-';
    }

    if (key.keyCode == 88 || key.keyCode == 106) {
      p.action = 'symbol';
      p.digit = '*';
    }

    if (key.keyCode == 111) {
      p.action = 'symbol';
      p.digit = '/';
    }

    if (key.keyCode == 190 || key.keyCode == 110) {
      p.action = 'decimal';
      p.digit = '.';
    }

    if (key.keyCode == 13) {
      p.action = 'equal';
    }

    if (key.keyCode == 8) {
      m.deleteCalculator();
    }

    m.calculator(p.action, p.digit);
  },

  selectKey: function(key) {
    p.action = key.target.getAttribute('class');
    p.digit = key.target.innerHTML;

    m.calculator(p.action, p.digit);
  }
};

m.init();
