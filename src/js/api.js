import axios from 'axios';

const URL = 'https://629b670d656cea05fc38b427.mockapi.io/sea-battle';

async function fetchData() {
  try {
    const response = await axios.get(URL);
  } catch (error) {
    console.log(error);
  }
}
fetchData();
