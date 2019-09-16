import { fetchData } from '../utilFunctions/fetchData';
import axiosMock from './../__mocks__/axios';

it('it dispatches action on resolve and reject', async () => {
  axiosMock.get.mockImplementationOnce((dispatch, options) => {
    return Promise.resolve({ data: [] });
  });
  const dispatch = jest.fn();
  const options = { sortBy: '' };
  await fetchData(dispatch, options);
  expect(dispatch).toHaveBeenCalledTimes(1);

  axiosMock.get.mockImplementationOnce((dispatch, options) => {
    return Promise.reject({ error: '' });
  });
  await fetchData(dispatch, options);
  expect(dispatch).toHaveBeenCalledTimes(2);
});
