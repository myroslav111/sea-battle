function item(num) {
  let arr = [];
  let id = 0;
  for (let index = 0; index < num; index++) {
    id += 1;
    arr.push(`<div class="cbx" id="b${id}">
    <input id="cbx" type="checkbox" />
    <label for="cbx"></label>
    <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
      <path d="M2 8.36364L6.23077 12L13 2"></path>
    </svg>
  </div>`);
  }
  return arr.join('');
}

function line(num) {
  let arr = [];
  let id = 10;
  for (let index = 0; index < num; index++) {
    id += 1;
    arr.push(`<div class="example" id="a${id}">${item(num)}</div>`);
  }
  return arr.join('');
}

export { line };
