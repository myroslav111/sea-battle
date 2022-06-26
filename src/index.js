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
// let flag = ;

renderGrid(1, line(10), counter);

const arr1 = refs.container.querySelectorAll('#cbx');
arr1.forEach(el => el.setAttribute('disabled', 'true'));

refs.button[0].addEventListener('click', addShip);
refs.button[1].addEventListener('click', shot);

refs.button[0].textContent = 'start';
async function addShip(e) {
  counter += 1;
  const respons = await fetchData(1);

  if (respons.data.user1.length !== 0 && counter === 1) {
    respons.data.user1.map(el => (arr1[el].checked = true));

    renderGrid(1, line(10), counter);
    arr1.forEach(el => el.setAttribute('disabled', 'true'));
    refs.button[0].setAttribute('disabled', 'true');
    refs.button[1].removeAttribute('disabled');
    // counter = 0;
    refs.button[0].textContent = 'твоя карта';

    const checbox = refs.container2.querySelectorAll('#cbx');
    respons.data.user2.forEach(el => {
      checbox[el].checked = true;
      checbox[el].setAttribute('disabled', 'true');
    });
    counter = respons.data.user2.length;
    return;
  }

  arr1.forEach(el => el.removeAttribute('disabled'));
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
        arr1.forEach(el => el.setAttribute('disabled', 'true'));
        refs.button[0].setAttribute('disabled', 'true');
        refs.button[1].removeAttribute('disabled');
        counter = 0;
        const map = [];
        arr1.forEach((el, index, ar) => {
          if (el.checked) {
            map.push(index);
          }
        });

        if (respons.data.user1.length === 0) {
          await patchData(1, dataForServ1(map));
        }
        refs.button[0].textContent = 'твоя карта';
      }
      break;

    default:
      console.log('чет пошло не так');
  }
}

let counterShot = 1;
async function shot(e) {
  counter += 1;
  const checbox = refs.container2.querySelectorAll('#cbx');
  const checbox1 = refs.container.querySelectorAll('#cbx');
  const getData_2 = await fetchData(2);
  const getData_1 = await fetchData(1);

  if (counter > 1) {
    console.log(getData_2.data.user2);
    getData_2.data.user2.forEach(el => {
      if (arr1[el].checked) {
        arr1[el].checked = false;
        arr1[el].classList.add('color-red');
      }
      arr1[el].classList.add('color-green');
    });
  }
  if (counter === counterShot) {
    let arr = [];

    checbox.forEach(el => {
      if (el.checked) {
        arr.push(el.checked);
      }
    });
    if (arr.length !== counter || getData_2.data.user2.length !== getData_1.data.user2.length) {
      Notiflix.Notify.failure('враг молчал');
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

      console.log(getData_2.data.user2.length, getData_1.data.user2.length);
      if (getData_2.data.user2.length === getData_1.data.user2.length) {
        try {
          await patchData(1, dataForServ2(map));
          Notiflix.Notify.success('1var');
        } catch {
          Notiflix.Notify.failure('1var');
        }
      } else {
        Notiflix.Notify.failure('getData_2 === getData_1');
        return;
      }
    }
    counterShot += 1;
  }
}
