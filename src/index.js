import './sass/main.scss';
import { flot } from './js/flot';
import { refs } from './js/refs';
import Notiflix from 'notiflix';
import { renderGrid } from './js/render-grid';
import { line } from './js/line';
import { fetchData, patchData } from './js/api';
// import api from './js/api';
import { dataForServ1, dataForServ2 } from './js/war';

let counter = 0;
let flag;

renderGrid(1, line(10), counter);

refs.button[0].addEventListener('click', addShip);
refs.button[1].addEventListener('click', shot);

refs.button[0].textContent = 'start';
async function addShip(e) {
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
      if (arr.length !== 2) {
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
        const map = [];
        console.log();
        arr1.forEach((el, index, ar) => {
          if (el.checked) {
            map.push(index);
            console.dir(ar);
            console.dir(index);
            console.dir(el);
          }
        });
        const respons = await fetchData(1);
        console.log(respons.data.user1.length);
        if (respons.data.user1.length === 0) {
          await patchData(1, dataForServ1(map));
          flag = true;
        } else {
          await patchData(2, dataForServ1(map));
        }
        console.log(respons.data.user1.length);

        console.log(map);
        refs.button[0].textContent = 'твоя карта';
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
    const checbox1 = refs.container.querySelectorAll('#cbx');
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
    const map = [];
    if (arr.length === counterShot) {
      checbox.forEach((el, index) => {
        if (el.checked) {
          el.setAttribute('disabled', 'true');
          map.push(index);
        }
      });
      console.log(map);
      if (flag) {
        patchData(1, dataForServ2(map));
      } else {
        patchData(2, dataForServ2(map));
      }
    }
    counterShot += 1;
    return;
  }
}
