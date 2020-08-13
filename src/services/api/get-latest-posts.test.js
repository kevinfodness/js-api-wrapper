import getLatestPosts from './get-latest-posts';

jest.mock('./request');

test('Should get the latest posts from the API.', async () => {
  expect.assertions(1);
  const data = await getLatestPosts();
  expect(data.length).toEqual(5);
});
