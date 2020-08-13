import fetch from 'isomorphic-fetch';
import get from './get';

jest.mock('isomorphic-fetch');

test('Should make a GET request to the API.', async () => {
  expect.assertions(1);

  // Mock the return value to avoid hitting the API.
  fetch.mockResolvedValue({
    json: () => [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
    ],
    ok: true,
  });

  // Run the request using the mocked response.
  const data = await get('/wp/v2/posts');
  expect(data.length).toEqual(5);
});

test('Should throw an error if the GET request failed.', async () => {
  expect.assertions(1);

  // Mock the return value to avoid hitting the API.
  fetch.mockResolvedValue({
    ok: false,
    status: 404,
    statusText: 'Not Found',
  });

  // Run the request using the mocked response.
  try {
    await get('/wp/v2/posts');
  } catch (error) {
    expect(error).toEqual({
      data: {
        ok: false,
        status: 404,
        statusText: 'Not Found',
      },
      message: 'Not Found',
    });
  }
});
