import './sass/main.scss';
import { flot } from './js/flot';
import { refs } from './js/refs';
// import './js/render-grid';
import Notiflix from 'notiflix';
import { renderGrid } from './js/render-grid';
import { line } from './js/line';

let counter = 0;
renderGrid(1, line(10), counter);

refs.button.addEventListener('click', addShip);

refs.button.textContent = 'start';
function addShip(e) {
  console.log();
  counter += 1;
  switch (counter) {
    case 1:
      refs.button.textContent = 'твой флот';
      flot(counter);
      break;
    case 2:
      refs.button.textContent = 'раставь корабли';
      flot(counter);
      break;
    case 3:
      let arr = [];
      const checbox = document.querySelectorAll('#cbx');
      checbox.forEach(el => {
        if (el.checked) {
          arr.push(el.checked);
        }
      });
      //   counter = 3;
      if (arr.length !== 1) {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
        counter = 2;
        return;
      } else {
        renderGrid(1, line(10), counter);
      }
      break;
    default:
      console.log('чет пошло не так');
  }

  console.dir();
}
