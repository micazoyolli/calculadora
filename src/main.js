import './styles/main.scss';
import Calculator from './Calculator';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('result');
  new Calculator(display);
});