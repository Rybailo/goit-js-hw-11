import axios from 'axios';
export { fetchImage };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '29758121-e6e3453f02405b4aa1525a8f6&q';

async function fetchImage(fromInput, page) {
  const response = await axios.get(
    `?key=${KEY}&q=${fromInput}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );
  return response;
}
