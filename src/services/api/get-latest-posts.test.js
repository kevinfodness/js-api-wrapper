import fetch from 'isomorphic-fetch';
import getLatestPosts from './get-latest-posts';

jest.mock('isomorphic-fetch');

test('Should get the latest posts from the API.', async () => {
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
  const data = await getLatestPosts();
  expect(data.length).toEqual(5);
});

test('Should throw an error if the request failed.', async () => {
  expect.assertions(1);

  // Mock the return value to avoid hitting the API.
  fetch.mockResolvedValue({
    ok: false,
    status: 500,
    statusText: 'Internal Server Error',
  });

  // Run the request using the mocked response.
  try {
    await getLatestPosts();
  } catch (error) {
    expect(error).toEqual({
      data: {
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      },
      message: 'Internal Server Error',
    });
  }
});
