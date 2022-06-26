import { refs } from './refs';


function flot(index) {
  if (index === 1) {
    const a11 = document.querySelector('#a11').children;
    a11[1].classList.add('color-red');
    a11[2].classList.add('color-red');
    a11[3].classList.add('color-red');
    a11[4].classList.add('color-red');

    const a13 = document.querySelector('#a13').children;
    a13[2].classList.add('color-red');
    a13[3].classList.add('color-red');
    a13[4].classList.add('color-red');

    const a15 = document.querySelector('#a15').children;
    a15[3].classList.add('color-red');
    a15[4].classList.add('color-red');

    const a17 = document.querySelector('#a17').children;
    a17[4].classList.add('color-red');

    const a19 = document.querySelector('#a19').children;
    a19[4].classList.add('color-red');
  } else {
    const a11 = document.querySelector('#a11').children;
    a11[1].classList.remove('color-red');
    a11[2].classList.remove('color-red');
    a11[3].classList.remove('color-red');
    a11[4].classList.remove('color-red');

    const a13 = document.querySelector('#a13').children;
    a13[2].classList.remove('color-red');
    a13[3].classList.remove('color-red');
    a13[4].classList.remove('color-red');

    const a15 = document.querySelector('#a15').children;
    a15[3].classList.remove('color-red');
    a15[4].classList.remove('color-red');

    const a17 = document.querySelector('#a17').children;
    a17[4].classList.remove('color-red');

    const a19 = document.querySelector('#a19').children;
    a19[4].classList.remove('color-red');
  }
}

export { flot };
