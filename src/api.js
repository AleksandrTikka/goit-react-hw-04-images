import Axios from 'axios';

export async function fetchImages({ page, searchInput }) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '28424420-2580f7fdb9c775c114ec2d9bf';
  const searchParams = new URLSearchParams({
    q: searchInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    key: API_KEY,
    page,
    per_page: 12,
  });

  const response = await Axios.get(`${BASE_URL}?${searchParams}`);

  return response.data;
}
