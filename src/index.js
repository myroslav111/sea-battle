import './sass/main.scss';
import { flot } from './js/flot';
import { refs } from './js/refs';
import Notiflix from 'notiflix';
import { renderGrid } from './js/render-grid';
import { line } from './js/line';
import './js/api';

let counter = 0;
renderGrid(1, line(10), counter);

refs.button[0].addEventListener('click', addShip);
refs.button[1].addEventListener('click', shot);

refs.button[0].textContent = 'start';
function addShip(e) {
  counter += 1;
  switch (counter) {
    case 1:
      refs.button[0].textContent = 'твой флот';
      flot(counter);
      break;
    case 2:
      refs.button[0].textContent = 'раставь корабли';
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
      if (arr.length !== 1) {
        Notiflix.Notify.failure('Qui timide rogat docet negare');
        counter = 2;
        return;
      } else {
        renderGrid(1, line(10), counter);
        const arr1 = refs.container.querySelectorAll('#cbx');
        arr1.forEach(el => el.setAttribute('disabled', 'true'));
        refs.button[0].setAttribute('disabled', 'true');
        refs.button[1].removeAttribute('disabled');
        counter = 0;
        // console.log(arr1.forEach(()));
      }
      break;
    default:
      console.log('чет пошло не так');
  }
}

let counterShot = 1;
function shot(e) {
  counter += 1;
  if (counter === counterShot) {
    let arr = [];
    const checbox = refs.container2.querySelectorAll('#cbx');
    checbox.forEach(el => {
      if (el.checked) {
        arr.push(el.checked);
      }
    });
    if (arr.length !== counter) {
      Notiflix.Notify.failure('Qui timide rogat docet negare');
      counter -= 1;
      return;
    }
    Notiflix.Notify.success('Sol lucet omnibus');
    if (arr.length === counterShot) {
      checbox.forEach(el => {
        if (el.checked) {
          el.setAttribute('disabled', 'true');
        }
      });
    }
    counterShot += 1;
    return;
  }
}
