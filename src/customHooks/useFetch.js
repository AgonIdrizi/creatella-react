import axios from 'axios';
export const useFetch = (dispatch, options) => {
  const sort = options.sortBy !== '' ? `&_sort=${options.sortBy}` : '';
  const url = `http://localhost:3000/api/products?_page=${options.currentPage}&_limit=15${sort}`;

  return axios
    .get(url)
    .then(response => {
      dispatch({ type: options.type, payload: response.data });
    })
    .catch(error => dispatch({ type: 'error' }));
};
