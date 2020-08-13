import get from './get';

jest.mock('./request');

test('Should make a GET request to the API.', async () => {
  expect.assertions(1);
  const data = await get('/wp/v2/posts');
  expect(data.length).toEqual(5);
});

test('Should throw an error if the GET request failed.', async () => {
  expect.assertions(1);
  try {
    await get('/path/does/not/exist');
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
