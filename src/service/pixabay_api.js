import axios from 'axios';

export const pixabayApi = async (query, page) => {
  const API_KEY = '34923285-708b41b0c2a9dca89e9ee12b3';
  const BASE_URL = 'https://pixabay.com';
  const response = await axios.get(
    `${BASE_URL}/api/?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`
  );
  return response.data;
};

// вариант 2 Делали в классе

// const API_KEY = '34923285-708b41b0c2a9dca89e9ee12b3';
// axios.defaults.baseURL = 'https://pixabay.com';
// // axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   key: API_KEY,
//   per_page: 12,
//   image_type: `photo`,
//   rientation: `horizontal`,
//   safesearch: true,
// };

// export const pixabayApi = async (query, page) => {
//   const response = await axios.get('/api', {
//     params: {
//       query,
//       page,
//     },
//   });
//   return response.data;
// };

// вариант 3 можно так оформлять запрос

// const API_KEY = '34923285-708b41b0c2a9dca89e9ee12b3';
// axios.defaults.baseURL = 'https://pixabay.com';

// export const pixabayApi = async (query, page) => {
//   const params = {
//     query,
//     page,
//     per_page: 12,
//     image_type: `photo`,
//     rientation: `horizontal`,
//     safesearch: true,
//     key: API_KEY,
//   };

//   const response = await axios.get('/api', { params });
//   return response.data;
// };

// вариант 4

// const API_KEY = '34923285-708b41b0c2a9dca89e9ee12b3';
// const baseURL = 'https://pixabay.com';

// export const pixabayApi = async (query, page) => {
//   const params = {
//     query,
//     page,
//     per_page: 12,
//     image_type: `photo`,
//     rientation: `horizontal`,
//     safesearch: true,
//     key: API_KEY,
//   };

//   const response = await axios.get(`${baseURL}/api`, { params });
//   return response.data;
// };
