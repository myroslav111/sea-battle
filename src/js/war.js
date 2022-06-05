import { fetchData, patchData } from './api';

function dataForServ1(data) {
  const obj = {};
  obj.user1 = data;
  return obj;
}

function dataForServ2(data) {
  const obj = {};
  obj.user2 = data;
  return obj;
}

export { dataForServ1, dataForServ2 };
