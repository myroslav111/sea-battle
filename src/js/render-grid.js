import { refs } from './refs';
import { line } from './line';

function renderGrid(num, line, i) {
  for (let index = 0; index < num; index++) {
    if (i !== 0) {
      refs.container2.insertAdjacentHTML('afterbegin', line);
    } else {
      refs.container.insertAdjacentHTML('afterbegin', line);
    }
  }
}
// renderGrid(1, line(10));
export { renderGrid };
