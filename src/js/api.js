import axios from 'axios';

const URL = 'https://629b670d656cea05fc38b427.mockapi.io/sea-battle';

async function fetchData(id) {
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
// fetchData(1);

async function patchData(id, arr) {
  try {
    const response = await axios.put(`${URL}/${id}`, arr);
  } catch (error) {
    console.log(error);
  }
}
// patchData(2, { user2: ['76', '4'] });

export { fetchData, patchData };
